const express = require('express') 
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');
const Challenge = require('./models/challengeModel')
const Goal = require('./models/goalsModel') 
const Profile = require('./models/profileModel') 
const app = express()

function logRequest(req, res, next)
{
  console.log(req.body);
  console.log(req.query);
  console.log(req.method);
  next();
}

app.use(logRequest);

app.use(
  cors({
    origin: ['http://127.0.0.1:3000/practice.html', 'http://localhost:3000/MyDBchallenges'],
    methods: ['GET', 'POST'], // Specify the HTTP methods you want to allow
  })
);

app.use(express.json())
app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/challenges', express.static(path.join(__dirname, 'challenges')));
app.use('/dashboard', express.static(path.join(__dirname, 'dashboard')));
app.use('/mealplans', express.static(path.join(__dirname, 'mealplans')));
app.use('/login', express.static(path.join(__dirname, 'login')));
app.use('/signup', express.static(path.join(__dirname, 'signup')));
app.use('/stats', express.static(path.join(__dirname, 'stats')));
app.use('/workouts', express.static(path.join(__dirname, 'workouts')));
app.use('/goals', express.static(path.join(__dirname, 'goals')));
app.use('/profile', express.static(path.join(__dirname, 'profile')));
app.use('/sleep', express.static(path.join(__dirname, 'sleep')));

 

app.get('/', (req, res) => {
  const fullPath = path.join(__dirname, 'pchallenges.html');
  res.sendFile(fullPath);
});

app.get('/challenges', (req, res) => {
  res.sendFile(path.join(__dirname, 'challenges', 'challenges.html'));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, 'stats', 'stats.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'Dashboard.html'));
});

app.get('/mealplans', (req, res) => {
  res.sendFile(path.join(__dirname, 'mealplans', 'MealPlans.html'));
});

app.get('/workouts', (req, res) => {
  res.sendFile(path.join(__dirname, 'workouts', 'Workout.html'));
});

app.get('/goals', (req, res) => {
  res.sendFile(path.join(__dirname, 'goals', 'goals.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login', 'LoginPage.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup', 'Signup.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile', 'profile.html'));
});

app.get('/sleep', (req, res) => {
  res.sendFile(path.join(__dirname, 'sleep', 'sleep.html'));
});

app.get('/MyDBchallenges', async(req,res) => {
  try{
    const challenge = await Challenge.find({});
    res.status(200).json(challenge)

  }catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//to find and redirect to personal challenge page
app.get('/anotherpage', (req, res) => {
  res.sendFile(__dirname + 'pchallenges.html');
});


app.post('/MyDBchallenges', async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(200).json(challenge);
  } catch (error) {
    console.error('Error creating challenge:', error);
    res.status(500).json({ message: 'Error occurred while creating the challenge.' });
  }
})


app.delete('/MyDBchallenges/:id', async (req, res) => {
  try {
    await Challenge.findByIdAndDelete(req.params.id);
    res.json({ message: 'Challenge deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Saving a new goal to the database
app.post('/MyDBgoals', async (req, res) => {
  try {
    // Creating a new goal instance from the request body
    const goal = new Goal(req.body);
    // Saving the new goal to the database
    await goal.save();
    res.status(200).json(goal); // Sending the saved goal as a JSON response
  } catch (error) {
    console.error('Error creating goal:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Retrieving goals from the database  SHOULD CREATE A DATABASE!!!
app.get('/MyDBgoals', async (req, res) => {
try {
  // Fetching all goals from the database
  const goals = await Goal.find({});
  res.status(200).json(goals); // Sending the goals as a JSON response
} catch (error) {
  console.log('Error fetching goals:', error.message);
  res.status(500).json({ message: 'Internal Server Error' });
}
});

// Update a goal in the database
app.put('/MyDBgoals/:id', async (req, res) => {
  try {
    const goalId = req.params.id;
    const updatedGoalData = req.body;

    // Find the goal by ID and update its data
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, updatedGoalData, { new: true });

    if (!updatedGoal) {
      // If goal with the specified ID is not found
      return res.status(404).json({ message: 'Goal not found' });
    }

    res.status(200).json(updatedGoal); // Sending the updated goal as a JSON response
  } catch (error) {
    console.error('Error updating goal:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/MyDBprofile', async (req, res) => {
  try {
    // Creating a new profile instance from the request body
    const profile = new Profile(req.body);
    // Saving the new profile to the database
    await profile.save();
    res.status(200).json(profile); // Sending the saved profile as a JSON response
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Retrieving profile from the database  SHOULD CREATE A DATABASE!!!
app.get('/MyDBprofile', async (req, res) => {
try {
  // Fetching all profile from the database
  const profile = await Profile.find({});
  res.status(200).json(profile); // Sending the profile as a JSON response
} catch (error) {
  console.log('Error fetching profile:', error.message);
  res.status(500).json({ message: 'Internal Server Error' });
}
});

// Update a profile in the database
app.put('/MyDBprofile/:id', async (req, res) => {
  try {
    const profileId = req.params.id;
    const updatedProfileData = req.body;

    // Find the profile by ID and update its data
    const updatedProfile = await Profile.findByIdAndUpdate(profileId, updatedProfileData, { new: true });

    if (!updatedProfile) {
      // If profile with the specified ID is not found
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(updatedProfile); // Sending the updated profile as a JSON response
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.post('/create', async (req, res) => {
	try {console.log("Create called");

		createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
		.then(function(){
	
			const id = req.body.email;
			const userJson = {
			email: req.body.email,
		}
		//adding users to the 'users' collection - this is where all of the users personal data will be saved
		database.collection('users').doc(id).set(userJson);
		//adding the same user (email- will try to use this as the main identifier, as duplicate emails are not allowed in the system) to 
		//the 'matches' collection - here the users matches will be stored.
		database.collection('matches').doc(id).set(userJson);
		var user = getAuth().currentUser.email;
		console.log(user);
		})
		res.sendStatus(200);
		console.log("User successfully added to database");

		//need to deal with users reregistering with the same email address

	} catch(error) {
		console.error("Error adding user to database ", error);
		res.sendStatus(500);
	}
});

  
mongoose.connect('mongodb+srv://JoySalami:21343606@webprocessingassignment.r0c4oos.mongodb.net/CS353Project?retryWrites=true&w=majority') 
.then(() => { 
  console.log("Pinged your deployment. You successfully connected to MongoDB!"); 
  app.listen(3000,'0.0.0.0', ()=> { 
    console.log(`Server is running on port 3000`) 
  }); 
}).catch((error) => { 
  console.log(error)
}) 