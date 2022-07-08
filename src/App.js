import Timer from './Component/Timer';
import './style.css';

function App() {
  return (
    <div className="App">
      <h5>ENV: {process.env.REACT_APP_URL}</h5>
      <Timer/>
    </div>
  );
}

export default App;
