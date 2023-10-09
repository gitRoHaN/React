import './App.css';
import Header from './Header'
import Nav from './Nav'
import ConfirmedBooking from './ConfirmedBooking'
import Footer from './Footer'
import HomePage from './Homepage'
import Chicago from './Chicago'
import CustomerSay from './CustomerSay'
import BookingPage from './BookingPage'
import Specials from './Specials'
import Login from './Login'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about-me" element={<Chicago/>}/>
        <Route path="/review" element={<CustomerSay/>}/>
        <Route path="/reservation" element={<BookingPage/>}/>
        <Route path="/order" element={<Specials/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}/>
      </Routes>
    </div>
  );
}

export default App;