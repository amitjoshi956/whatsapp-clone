import * as classes from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar'
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.AppBody}>
        <Sidebar />
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;
