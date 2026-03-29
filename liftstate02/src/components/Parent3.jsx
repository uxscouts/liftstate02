import {useState} from 'react';
import Input3 from './Input3';

function Parent3(){
 const [valueFromInput3, setValueFromInput3] = useState('');

 // function to update the parent exctracted value from child
 // use setter function
 const processInput3Value = (someValue) => {
    setValueFromInput3(someValue);
 }
 return(
    <>
        <p>Parent 03</p>
        <p>{valueFromInput3}</p>
        <Input3 someFunctionName={processInput3Value}/>
    </>
 )
}

export default Parent3;