
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HotelsList from './pages/HotelsList';
import SingleHotel from './pages/SingleHotel';
import NewHotel from './pages/NewHotel';

function App() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link className="btn btn-primary" to="/ujhotel">Új hotel</Link>
        <Link className="btn btn-primary" to="/">Hotelek</Link>
    </nav>
    
      <Routes>
        <Route path='/' element={<HotelsList/>}/>
        <Route path='/hotel/:id' element={<SingleHotel/>} />
        <Route path='/ujhotel' element={<NewHotel/>} />
      </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
