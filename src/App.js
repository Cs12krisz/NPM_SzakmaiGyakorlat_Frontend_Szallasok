
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HotelsList from './HotelsList';
import SingleHotel from './SingleHotel';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HotelsList/>}/>
        <Route path='/hotel/:id' element={<SingleHotel/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
