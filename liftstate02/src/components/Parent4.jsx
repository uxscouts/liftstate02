import {useState} from 'react';
import Input4 from "./Input4";

function Parent4(){
    const [message4, setMessage4] = useState('Initial message4');
const updateMessage4 = (newMessage4) =>{
    setMessage4(newMessage4);
}
    return(
        <>
        <p>Parent 04</p>
        <p>Current Message: {message4}</p>
        <Input4 onMessageChange2={updateMessage4}/>
        </>
    )
}

export default Parent4;