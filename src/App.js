import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import NavigationBar from './components/NavigationBar';
import ToDoComponent from './components/ToDoComponent';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ToDoComponent />
    </div>
  );
}

export default App;
