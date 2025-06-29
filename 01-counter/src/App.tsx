import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>
    <div className="flex flex-col gap-4 items-center justify-center mx-auto my-[20vh]">
      <h1 className='text-3xl'><span className='font-bold'>Project 1:</span> Counter</h1> 
      <Counter/>
    </div>
    </>
  );
}

export default App;
