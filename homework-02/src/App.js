import './App.css';
import Homepage from '../src/components/Homepage/Homepage';
import Signup from '../src/components/Signup/Signup';
import Signin from '../src/components/Signin/Signin';

function App() {
  return (
    <div className="app">
      <Homepage />
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
