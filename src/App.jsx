import Header from './components/Header'
import CampgroundList from './components/CampgroundList'
import AddCampgroundForm from './components/AddCampgroundForm'
import UpdateCampgroundForm from './components/UpdateCampgroundForm';
import { useState } from 'react';
import './App.css'


function App({campgroundInitialList}) {
  const [campgroundList, setCampgroundList] = useState(campgroundInitialList)
  const [isEditing, setIsEditing] = useState(false)
  const [campToEdit, setCampToEdit] = useState({})


  return (
    <>
      <Header />
      <div className="main-container">
        <section className="campgrounds">
          <CampgroundList campgroundListData={campgroundList} renderCampgroundlist={setCampgroundList} editing={setIsEditing} campToEdit={setCampToEdit}/>
        </section>
        <section className="form-section">
        {!isEditing ?
          <AddCampgroundForm renderCampgroundlist={setCampgroundList} campgrounds={campgroundList}/>
          :
          <UpdateCampgroundForm editing={setIsEditing} campground={campToEdit} setCampgrounds={setCampgroundList}/>
        }
        </section>
      </div>
    </>
  )
}

export default App