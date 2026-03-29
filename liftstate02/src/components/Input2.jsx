

function Input2({onSendMessage2}){

const handleChange2 = (event) => {
    onSendMessage2(event.target.value);
}

    return(
    <input
        type="test"
        onChange={handleChange2}
        placeholder="Child Compnent 2"
    />
    )
}

export default Input2;