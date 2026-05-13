import { useEffect, useState } from "react"


export default function HotelsList() {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetch("https://nodejs.sulla.hu/data")
        .then((resp) => resp.json())
        .then((data) => setHotels(data))
    }, [])

  return (
    <>
        <div className="row g-4">
            {hotels.map((hotel, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 h-100">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{hotel.name}</h5>
                                <p className="card-text">Helye: {hotel.location}</p>
                                <p className="card-text">Ára: {hotel.price}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                
            ))}

        </div>
    </>
  )
}
