import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Main from './Components/Main';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : (
        <Main />
      )}
    </div>
  );
};

export default App;
