import React, { useState, useEffect } from 'react';
 // Ensure this file path is correct


const App = () => {
  const [mode, setMode] = useState('system');

  useEffect(() => {
    if (mode === 'system') {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(prefersDarkScheme ? 'light' : 'dark');
    }
  }, [mode]);

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark-mode' : 'light-mode';
  }, [mode]);

  return (
    <div className="dropdown">
      
     <img src='https://static.thenounproject.com/png/4808961-200.png'></img>
      <div className="dropdown-content">
      <a href="#" onClick={() => setMode('light')}>Light Mode</a>
        <a href="#" onClick={() => setMode('dark')}>Dark Mode</a>
          <a href="#" onClick={() => setMode('system')}>System Mode</a>
      </div>
    </div>
  );
};

export default App;
