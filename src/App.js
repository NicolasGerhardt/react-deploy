import './App.css';
import profileImage from './img/me.png';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Nic</h2>
      <img src={profileImage} alt="profile" />
    </div>
  );
}

export default App;
