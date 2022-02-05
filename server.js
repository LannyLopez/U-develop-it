const express = require('express');
const { param } = require('express/lib/request');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection')
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

 app.use(express.urlencoded({ extended: false}));
 app.use(express.json());

    console.log('Connected to the election database')
 
 

app.use('/api', apiRoutes);


app.use((req, res) =>{
    res.status(404).end();
});



db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});