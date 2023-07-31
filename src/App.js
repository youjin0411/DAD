import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './component/navbar/NavbarContain';
import Main from './pages/Main';
import SidebarContent from './component/Sidebar/SidebarContext';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <MainContent>
        <SidebarContent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
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