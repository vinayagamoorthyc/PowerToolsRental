import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './sign_pages/SignIn';
import SignUp from './sign_pages/SignUp';
import MainPage from './Main_Page';
import About from './otherPages/About';
import ProductPage from './otherPages/ProductPage';
import AllProducts from './otherPages/AllProducts';
import ProfilePage from './otherPages/ProfilePage';
import EditProfile from './otherPages/EditProfile';
import AdminPortal from './sign_pages/AdminPortal';
import Track from './sign_pages/Track';
import Reports from './sign_pages/Reports';
import Experience from './sign_pages/Experience';
import CheckOut from './payments/CheckOut';
import ProUpdate from './sign_pages/ProUpdate';
import Users from './sign_pages/Users';

function App() {
  const login = window.localStorage.getItem("IsLogedIn");
  return (
    <div className="App"> 
      <Routes>
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/' element={login? <MainPage/> : <MainPage/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/ProductPage/:id' element={<ProductPage/>}/>
        <Route path='/AllProducts' element={<AllProducts/>}/>
        <Route path='/ProfilePage' element={<ProfilePage/>}/>
        <Route path='/EditProfile/:id' element={<EditProfile/>}/>
        <Route path='/AdminPortal' element={<AdminPortal/>}/>
        <Route path='/Track' element={<Track/>}/>
        <Route path='/Reports' element={<Reports/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/CheckOut/:subtotal' element={<CheckOut/>}/>
        <Route path='/ProUpdate/:id' element={<ProUpdate/>}/>
        <Route path='/Users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
