import axios from 'axios';
import { useState } from 'react';

function AddCampgroundForm({renderCampgroundlist, campgrounds}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [spotsAvailable, setSpotsAvailable] = useState(0)
    const [img, setImage] = useState('')

    const addCampground = async () => {

        const {data} = await axios.post('/api/campground', {
            name: name, 
            description: description, 
            location: location,
            spotsAvailable: spotsAvailable, 
            img: img
        
        })
        const newCampground = {...data}
    
        renderCampgroundlist([...campgrounds, newCampground])

        setName('')
        setDescription('')
        setLocation('')
        setSpotsAvailable(0)
        setImage('')
     }

    return (
        <form className="form">
            <h3>Add a Campground</h3>
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
            <button className="form-button" onClick={addCampground}>Add Campground</button>
        </form>
    )

}

export default AddCampgroundForm