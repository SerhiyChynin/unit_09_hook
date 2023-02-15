import './App.css';
import Button from './Button';
import ButtonHook from './ButtonHook';
import DataLoader from './DataLoader';
import DataLoaderHook from './DataLoaderHook';

function App() {
  return (
    <div className="App">
      <Button />
      <hr />
      <ButtonHook />
      <hr />
      <DataLoader />
      <hr />
      <DataLoaderHook/>
    </div>
  );
}

export default App;
