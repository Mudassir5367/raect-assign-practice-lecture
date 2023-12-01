import React, { useContext } from 'react';
import { Data } from './CompC';

export default function CompA() {
  const { item, updateData } = useContext(Data);

  const handleClick = () => {
    updateData('Updated data received');
  };

  return (
    <div>
      <p>Data from child component: {item}</p>
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
}
