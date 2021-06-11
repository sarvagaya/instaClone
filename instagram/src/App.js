// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Login from './components/Login/Login';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      email: "sarvagayaabrol@gmail.com",
      fullname: "sarvagaya abrol",
      username: "Sarvagaya",
      password: ""
    }
  ])

  const handleNewUser = (userInfoObject) => {
    setUsers(prevState => {
      const updatedUsers = [...prevState];
      updatedUsers.push(userInfoObject)
      return(updatedUsers)
      // console.log([...prevState, userInfoObject])
    })
  }
  console.log(users)
  return (
    <>
      <Login onNewUser={handleNewUser} />
    </>
  );
}

export default App;
