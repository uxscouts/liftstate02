
function Nested4({ onMessageChange2 }){
 return(
   <>
    <p>Nested4</p>
     <div>
      <button onClick={() => onMessageChange2("Hello from Nested4!")}>
        Change Message in Nested4
      </button>
    </div> 
    </>  
 )
}

export default Nested4;


