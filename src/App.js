import * as classes from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppBody}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
