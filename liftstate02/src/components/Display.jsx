import React, { useState } from 'react';

// Child Component 2: Display
function Display({ message }) {
  // Uses the state passed down as a prop
  return <p>Current Message: {message}</p>;
}

export default Display;