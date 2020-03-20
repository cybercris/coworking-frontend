import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SpotList() {
  return (
    <>
      <h2>spot list</h2>
      <Link to="/dashboard/addspot">add Spot</Link>
    </>
  );
}
