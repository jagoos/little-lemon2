import Header from './components/Header';
import Nav from './components/Nav';
import Main from "./components/Main";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import NotFound from './Pages/NotFound';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
    <Nav/>
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
