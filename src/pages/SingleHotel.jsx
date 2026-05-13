import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleHotel() {
    const params = useParams()
    const {id} = params;
    const [hotel, setHotel] = useState({})

    useEffect(() => {
        fetch(`https://nodejs.sulla.hu/data/${id}`)
        .then((resp) => resp.json())
        .then((data) => setHotel(data))
    }, [id])

  return (
    <>
        <div className="card">
            <div className="card-header">{hotel.name}</div>
            <div className="card-body">
                <p className="card-text">Hely: {hotel.location}</p>
                <p className='card-text'>Ára: {hotel.price}</p>
            </div>
        </div>
    </>
  )
}
