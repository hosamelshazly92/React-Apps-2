import './App.css';

const api = {
  key: "edf48109910697a24b55efdff8cf31f1",
  base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=edf48109910697a24b55efdff8cf31f1"
}

function App() {
  return (
    <div className="app">
      <main>
        <div id="search-box">
          <input 
            type="text"
            id="search-bar"
            placeholder="Search...."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
