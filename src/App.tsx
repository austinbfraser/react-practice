import { useState, useEffect } from 'react';
import './App.css';
import { ISS_API } from './constants';

interface APIResponse {
  people: Astronaut[];
  number: number;
  message: string;
}

interface Astronaut {
  craft: string;
  name: string;
}

function App() {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
  useEffect(() => {
    const fetchAstronauts = async () => {
      const res = await fetch(ISS_API);
      const data: APIResponse = await res.json();
      setAstronauts(data.people);
    };

    fetchAstronauts();
  }, []);

  return (
    <div>
      <h1>Astronauts Currently in Space</h1>
      <ul>
        {astronauts.map((astro, index) => (
          <li key={index}>
            {astro.name} ({astro.craft})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
