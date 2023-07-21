import Header from './components/Header'
import CampgroundList from './components/CampgroundList'
import './App.css'
import AddCampgroundForm from './components/AddCampgroundForm'
import { useState } from 'react';
import axios from 'axios'
import UpdateCampgroundForm from './components/UpdateCampgroundForm';


function App({campgroundInitialList}) {
  const [campgroundList, setCampgroundList] = useState(campgroundInitialList)
  const [isEditing, setIsEditing] = useState(false)
  const [campToEdit, setCampToEdit] = useState({})
  console.log('isEditing', isEditing)

  return (
    <>
      <Header />
      <div className="main-container">
        <section className="campgrounds">
          <CampgroundList campgroundListData={campgroundList} editing={setIsEditing} campToEdit={setCampToEdit}/>
        </section>
        <section className="form-section">
        {!isEditing ?
          <AddCampgroundForm renderCampgroundlist={setCampgroundList} campgrounds={campgroundList}/>
          :
          <UpdateCampgroundForm editing={setIsEditing} campground={campToEdit}/>
        }
        </section>
      </div>
    </>
  )
}

export default App
