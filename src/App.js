import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MemberData from './data.json'; 

function App() {
  return (
    <div className="App">
        <Header />
        <Home placeholder="Add by name or email" data ={MemberData}/>
    </div>
  );
}

export default App;
