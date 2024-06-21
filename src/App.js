import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={toggleModal}>Hello World</h1>
      </header>
      {isOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default App;
