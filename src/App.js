
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HotelsList from './HotelsList';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HotelsList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
