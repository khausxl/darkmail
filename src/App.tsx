import React from 'react';

import List from './components/lists';
import Menu from './components/menu';

function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu/>
      <List/>
    </div>
  );
}

export default App;
