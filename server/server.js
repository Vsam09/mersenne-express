console.log('First express app!');

//Load the express library
//from node_modules/express
const express = require('express');

//Create our app server
const app = express();


//Tell express where to find all
//of our "public" files
//aka 'client-side' files
//aka "static assets"
app.use(express.static('./server/public'));

//Listen for request
const port = 5000;
app.listen(5000, function(){
    //kind of like our onReady function
    console.log('App is up and running on localhost:5000');
});