function Input3({someFunctionName}){

    const evantHandler3 = (event) => {
        someFunctionName(event.target.value);
    }

    return(
<input
    type="text"
    onChange={evantHandler3}
    placement="Input 03 value"
/>
    )
}

export default Input3;