//initialize express
const express = require('express');
//link app to express
const app = express();
//set variable port for prod/dev
const PORT = process.env.PORT || 3001;

//link api routes
const apiRoutes = require('./routes/apiRoutes');
//link html routes
const htmlRoutes = require('./routes/htmlRoutes');

//receive html
app.use(express.urlencoded({ extended: true}));
//enable reading json
app.use(express.json());
//set public dir
app.use(express.static('public'));

//set api route
app.use ('/api', apiRoutes);
//set html route
app.use ('/', htmlRoutes);

//add confirm that port is listening
app.listen(PORT, () => {
    console.log(`API server is active on port ${PORT}!`);
});