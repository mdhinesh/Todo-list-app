
function App() {
  return (
    <div className="all-container">
      <div className="container">
        <h1>Todo List</h1>
      </div>
      <div className="container">
        <div className="input-container">
          <input type="text" className="inputbox" />
          <button className="add-button">Add</button>
        </div>
      </div>
      <div className="container">
        <div className="list-navbar">
          <div className="item-container">
            items
          </div>
          <div className="apc-container">
            <div className="all">all</div>
            <div className="pending">pending</div>
            <div className="completed">completed</div>
          </div>
          <div className="clear">
            clear
          </div>
        </div>
        <div className="list-container">
          <ul>
              <li><input type="checkbox"/><p>Go to gym</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;