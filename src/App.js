import logo from './logo.svg';
import './App.css';
import Users from "./Users";
import User from "./User";
import {UsersProvider} from './UsersContext'
function App() {
  return (
      <UsersProvider>
        <Users/>
      </UsersProvider>
  );
}

export default App;
