import axios from 'axios'

function CampgroundList({campgroundListData, renderCampgroundlist, editing, campToEdit}) {


const campList = campgroundListData.map((campground) => {
    const {id, name, description, location, spotsAvailable, img} = campground;

    const updateCampground = () => {
        campToEdit(campground)
        editing(true)
    }

    const deleteCampground = () => {
        axios.post(`/api/campground/delete/${id}`)
        .then((response) => {
            renderCampgroundlist(response.data)
        })
}

    return (
        <article key={id}>
            <div className="article-wrapper">
                <figure>
                    <img src={img} className="article-image" alt="" />
                </figure>
                <div className="article-body">
                    <h2>{name}</h2>
                    <h6>{location}</h6>
                    <hr />
                    <p>{description}</p>
                    <p>Spots Available: {spotsAvailable}</p>
                    <div className="dual-buttons">
                        <div>
                            <button className="form-button" onClick={updateCampground}>Edit</button>
                        </div>
                        <div>
                            <button className="form-button" onClick={deleteCampground}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
  })

  return (
    <div className="campList">
        {campList}
    </div>
  )
}

export default CampgroundList