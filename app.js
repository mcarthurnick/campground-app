import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'


const app = express();

const port = 8000;

let myId = 4;

//set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config({printViteDevServerHost: true})

const campgrounds = [
    { id: 0, name: 'Moab Slot Canyon', description: 'Being the best camping spot in Moab, our campground combines the rustic feel of adventure camping with resort-like amenities like the largest pool in town! Whether you are after a deluxe lodging experience, primitive tent camping or a classic RV park, there is a way to stay for everyone. We are the perfect distance from the bustle of the town, but within 15 minutes of Moab&#39;s greatest attractions. Our RV resort is near Arches National Park, with our campground offering a quick drive to Dead Horse State Park.', location: 'Moab, UT', spotsAvailable: 50, img: './assets/campground-4.jpg' },
    { id: 1, name: 'Willow Park ', description: 'Willow Park camping is a dry campsite. Willow Park Campground is nestled between the Jordan River and the Jordan River Trail. It features both individual overnight camping spots and group sites that can accommodate large groups. Every site has a picnic table and fire pit. You can also reserve the pavilions at Willow Park. Willow Park features sand volleyball, playgrounds, access to the Jordan River Trail, a boat launch site for the Jordan River, and a dog park.',  location: 'YellowStone, WY', spotsAvailable: 50, img: './assets/campground-2.jpg' },
    { id: 2, name: 'Apgar Campground', description: 'Apgar campground is the largest campground in the park. It is situated in trees and provides tent and RV campers with shade and some privacy. Evening sunsets on Lake McDonald are only a short stroll, and you wont want to miss evening programs with a ranger at the Apgar Amphitheater. Many trails are located within a short drive of the campground. Five Group Sites are reservable in advance.', location: 'West Glacier, MT', spotsAvailable: 50, img: './assets/campground-5.jpg' },
    { id: 3, name: 'Cooper Gulch', description: 'Located on the shores of Lewiston Lake, approximately 4 miles north of Lewiston on County Road 105, and 17 miles from Weaverville. This campground is on the waters edge and is a favorite for fisherman, and for launching kayaks or canoes.' ,location: 'YellowStone, WY', spotsAvailable: 50, img: './assets/campground-3.jpg' },
  ];


//////////////      Routes    //////////////  

app.get('/api/campgrounds', (req, res) => {
    res.json(campgrounds)
})

app.post('/api/campground', (req, res) => {
    console.log('req.body', req.body)
    const {name, description, location, spotsAvailable, img} = req.body

    const newCampground = {
        id: myId,
        name: name,
        description: description,
        location: location,
        spotsAvailable: spotsAvailable,
        img: img 
    }

    campgrounds.push(newCampground)
    myId += 1
    res.json(newCampground)

})

app.post('/api/campground/:id', (req, res) => {
    
})





ViteExpress.listen(app, port, () => console.log(`Server running on http://localhost:${port}`))