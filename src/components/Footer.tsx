import { useState } from 'react';

const Footer = () => {
  const [count, setCount] = useState(0);
  const [isIncremented, setIsIncremented] = useState(false);

  const handleButtonClick = () => {
    if (isIncremented) {
      setCount(count - 1); 
    } else {
      setCount(count + 1); 
    }
    setIsIncremented(!isIncremented); 
  };

  return (
    <div className='flex gap-2 text-red-600'>
      <button onClick={handleButtonClick} className='hover:text-blue-700 focus:text-blue-900'>
        Toggle Count
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Footer;

