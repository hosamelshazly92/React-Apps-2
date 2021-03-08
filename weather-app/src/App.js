import './App.css';

const api = {
  key: "edf48109910697a24b55efdff8cf31f1",
  base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=edf48109910697a24b55efdff8cf31f1"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

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

        <div>
          <div id="location-box">
            <div id="location">Giza, Egypt</div>
            <div id="date">{dateBuilder(new Date())}</div>
          </div>
        </div>

        <div id="weather-box">
          <div id="temp">
            15 C
          </div>
          <div id="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
