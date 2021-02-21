import './App.css';
import React from 'react'


function App() {
  const element = React.createElement( 
    'h1',{className: 'greeting'},  'Bu bir medium yazısıdırd.'
);

  return (
    <div>
      {element}
    </div>
  );
}

export default App;
