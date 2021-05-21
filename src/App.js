import './App.css';


const MyAppBasic = ()=>{
  return (
    <div className="main-app">
        <h1>My Github App</h1>
        <div className="header-search">
            <input className="input-search" type="text" id="search" name="search" placeholder="Type a Repository name" />
            <button>Search</button>
        </div>
        <div className="main-list">
          <div className="list-item">
            <div className="item">
              <p className="item-title">AJV-Validate</p>
              <p className="item-desc">Use AJV to validate data</p>
            </div>

            <div className="item">
              <p className="item-title">AJV-Validate</p>
              <p className="item-desc">Use AJV to validate data</p>
            </div>

           

            

            
          </div>
        </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <MyAppBasic />
    </div>
  );
}

export default App;
