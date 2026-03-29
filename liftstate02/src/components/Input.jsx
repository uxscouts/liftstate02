

// Child Component 1: Input
function Input({ onMessageChange }) {
  const handleChange = (event) => {
    // Calls the function passed from the parent
    onMessageChange(event.target.value);
  };

  return (
    <input 
      type="text" 
      onChange={handleChange} 
      placeholder="Child Component 1" />
  );
}

export default Input;