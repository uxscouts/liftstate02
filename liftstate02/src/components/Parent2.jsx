
import Input2 from "./Input2";
import { useState } from 'react';


function Parent2(){
    const [message2, setMessage2] = useState('');


  // function to update the message2 state
  const handleMessageChange2 = (newMessage2) => {
    setMessage2(newMessage2);
  }

{/*
  const handleMessageChange = useCallback((newMessage) => {
  setMessage(newMessage);
}, [setMessage]); // Recreates only if setMessage changes
*/}

    return(
      <>    
        <p>Parent 02</p>
        <p>{message2}</p>
       <Input2 onSendMessage2={handleMessageChange2 } />
       </>
    )
}

export default Parent2