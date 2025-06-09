import { useEffect } from 'react';

const usePokemon = () => {
  const fetchPokemon = () => {
    console.log('beeh booh bah');
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
};

export default usePokemon;
