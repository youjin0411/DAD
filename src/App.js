import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './component/navbar/NavbarContain';
import Main from './pages/Main';
import SidebarContent from './component/Sidebar/SidebarContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EditProject from './pages/EditProject'

const App = () => {
  return (
    <Router>
      <NavBar />
      <MainContent>
        <SidebarContent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/edit" element={<EditProject />} />
        </Routes>
      </MainContent>
    </Router>
  );
};
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`
export default App;