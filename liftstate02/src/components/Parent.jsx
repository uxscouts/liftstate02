// Parent Component: Manages the state
function Parent() {
  const [message, setMessage] = useState('');

  // Function to update the message state
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the state and the updater function as props */}
      <Input onMessageChange={handleMessageChange} />
      <Display message={message} />
    </div>
  );
}

export default Parent;