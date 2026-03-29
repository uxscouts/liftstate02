import Input from "./Input";
import { useState } from 'react';


function Parent(){
    const [message, setMessage] = useState('');

  // Function to update the message state
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  }; 

{/*
  const handleMessageChange = useCallback((newMessage) => {
  setMessage(newMessage);
}, [setMessage]); // Recreates only if setMessage changes
*/}

    return(
      <>
        <p>Parent 01</p>
      {/* Pass the state and the updater function as props */}
      <p>{message}</p>
     <Input onMessageChange={handleMessageChange} />   
      </>
    )
}

export default Parent