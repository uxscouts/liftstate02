
import Nested4 from "./Nested4";

function Input4({onMessageChange4}){
    return(
        <>
          <p>Input4</p>
          <Nested4 onMessageChange2={onMessageChange4}/>
        </>
    )

export default Input4;