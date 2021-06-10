import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Error - 404</h1>
      <h3>Nothing to see here...</h3>
      <Link to="/">Back to safety</Link>
    </>
  );
}

export default NotFound;
