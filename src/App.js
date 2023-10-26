import "./css/App.css";
import Create from './components/Create';
import FetchUsers from './components/FetchUsers';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserDetailPage from './components/UserDetailPage';
import { Toaster } from "react-hot-toast"
import EditPage from "./components/EditPage";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/actions/userActions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/createUser' element={<Create />} />
        <Route exact path='/fetchUsers' element={<FetchUsers />} />
        <Route exact path='/user/:id' element={<UserDetailPage />} />
        <Route exact path='/edit/:id' element={<EditPage />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
