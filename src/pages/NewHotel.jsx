export default function NewHotel() {
    const submitEvent = (e) => {
        e.preventDefault()

        const ujHotel = {
            name : e.target.name.value,
            hostname: e.target.hostname.value,
            location: e.target.location.value,
            price: Number(e.target.price.value),
            minimum_nights: Number(e.target.minimumN.value)
        }

        const ujHotelJson = JSON.stringify(ujHotel)

        fetch("https://nodejs.sulla.hu/data", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: ujHotelJson
        })
        .then((resp) => resp.json())
        .then(() => alert("Sikeres feltöltés!"))
        .then(() => window.location.assign("/"))
    }



  return (
    <>
        <h1>NewHotel</h1>
        <form method="post" onSubmit={submitEvent}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="hostname" className="form-label">Hostname</label>
                <input type="text" className="form-control" id="hostname" name='hostname' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name='location' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name='price' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="minimumN" className="form-label">Minimum nights</label>
                <input type="number" className="form-control" id="minimumN" name='minimumN' required/>
            </div>
            <button type='submit' className='btn btn-primary'>Feltöltés</button>
        </form>
    </>
  )
}
