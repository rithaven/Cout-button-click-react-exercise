import  { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='flex items-center justify-center h-screen m-auto'>
      <div>
      <p className='mb-4'>You've clicked the button: {count} times.</p>

<button className='p-2 border border-black bg-slate-200 active:bg-yellow-500' onClick={handleClick}>Click me</button>
      </div>
         
  </div>
  );
}

export default App;
