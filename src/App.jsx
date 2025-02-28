import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Registration from "./assets/pages/Registration";
import Layout from "./component/layout/Layout";
import Profile from "./assets/pages/Profile";
import UserList from "./assets/pages/UserList";
import FriendList from "./assets/pages/FriendList";
import FriendRqstList from "./assets/pages/FriendRqstList";
import BlockList from "./assets/pages/BlockList";
function App() {

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="login/" element={<Login />} />
      <Route path="registration/" element={<Registration />} />      
      <Route path="userlist/" element={<UserList />} />    
      <Route path="friendlist/" element={<FriendList />} />   
      <Route path="frdrqst/" element={<FriendRqstList />} />   
      <Route path="blocklist/" element={<BlockList />} />   

      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
