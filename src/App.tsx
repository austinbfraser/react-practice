import { useState } from 'react';
import { css } from '@emotion/css';

import { fetchLastLocation } from './backend/fetchLastLocations';

// This is an example results data structure
// const results: any = [
//   {
//     timestamp: Date.now(),
//     address: {
//       street: '5th Ave',
//       city: 'Random City',
//     },
//     executionTime: 900,
//   },
//   {
//     timestamp: Date.now() + 2000,
//     address: {
//       street: 'Main Road',
//       city: 'New Town',
//     },
//     executionTime: 400,
//   },
// ];

interface MockApiResponse {
  address: {
    street: string;
    city: string;
    id: string;
  };
}

interface Response extends MockApiResponse {
  timestamp: number;
  executionTime: number;
}

const getStyles = () => ({
  button: css`
    border: 1px solid black;
    background: transparent;
    padding: 5px;
  `,
  container: css`
    margin: 10px;
  `,
  statsContainer: css`
    margin-top: 20px;
  `,
  table: css`
    margin-top: 20px;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
  `,
});

function App() {
  const [response, setResponse] = useState<Response[]>([]);
  let latest;
  if (response.length > 0) {
    latest = response[response.length - 1];
  }

  const handleOnClick = async () => {
    const timestamp = Date.now();

    await fetchLastLocation().then((res) => {
      const end = Date.now();
      const newResponse = [...response];
      newResponse.push({ timestamp, executionTime: end - timestamp, ...res });
      setResponse(newResponse);
    });
  };

  let times = response.map((item) => item.executionTime);
  times.sort((a, b) => a - b);
  const fastest = times[0];
  const slowest = times[times.length - 1];
  const average = Number(
    (times.reduce((acc, curr) => acc + curr, 0) / times.length).toFixed(0)
  );
  

  const s = getStyles();
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => handleOnClick()}>
        Get Last Location
      </button>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Street</th>
            <th>City</th>
            <th>Execution Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{latest?.timestamp}</td>
            <td>{latest?.address?.street}</td>
            <td>{latest?.address?.city}</td>
            <td>{latest?.executionTime}</td>
          </tr>
        </tbody>
      </table>
      <div className={s.statsContainer}>
        <div>Fastest: {fastest} ms </div>
        <div>Slowest: {slowest} ms </div>
        <div>Average: {!!average && average} ms </div>
      </div>
    </div>
  );
}

export default App;
