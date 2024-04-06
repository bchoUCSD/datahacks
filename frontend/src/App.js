function App() {
  
  function handleClick(){
    console.log("button clicked")
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our front end of the app</h1>
        <button onClick={handleClick}>CLICK ME </button>
      </header>
    </div>
  );
}

export default App;
