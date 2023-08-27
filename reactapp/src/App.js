
import './App.css';
import { filterEven,filterOdd,generateRandomList } from './functions/filterOddEven';

function App() {
  return (
    <div className="App">
      <filterOdd/>
      <filterEven/>
      <generateRandomList/>
      
    </div>
  );
}
export default App;


