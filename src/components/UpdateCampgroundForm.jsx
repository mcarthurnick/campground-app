import axios from 'axios';
import { useState } from 'react';

function UpdateCampgroundForm({campground}) {
    console.log('campground', campground)
    const [id, setId] = useState(campground.id)
    const [name, setName] = useState(campground.name)
    const [description, setDescription] = useState(campground.description)
    const [location, setLocation] = useState(campground.location)
    const [spotsAvailable, setSpotsAvailable] = useState(campground.spotsAvailable)
    const [img, setImage] = useState(campground.img)

    const updateCampground = async () => {

        const {data} = await axios.post(`/api/campground/${id}`, {
            id: id,
            name: name, 
            description: description, 
            location: location,
            spotsAvailable: spotsAvailable, 
            img: img
        
        })
        //const newCampground = {...data}
    
        //renderCampgroundlist([...campgrounds, newCampground])
     }

    return (
        <form className="form">
            <h3>Update Campground</h3>
            <hr />
            <div className="form-input">
                <label>Name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-input">
                <label>Location</label><br />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="form-input">
                <label>Description</label><br />
                <textarea rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div className="form-input">
                <label>Spots Available</label><br />
                <input type="text" value={spotsAvailable} onChange={(e) => setSpotsAvailable(e.target.value)}/>
            </div>
            <div className="form-input">
                <label>Image Link</label><br />
                <input type="text" value={img} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <button className="form-button" onClick={updateCampground}>Update Campground</button>
        </form>
    )

}

export default UpdateCampgroundForm