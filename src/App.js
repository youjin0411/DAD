import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/navbar/NavbarContain'
import Main from './pages/Main';

const App = () => {
    return (
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={Main}></Route>
          </Routes>
        </Router>
    );
}
export default App;