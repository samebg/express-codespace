//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get('/',(req,res)=>{
  res.send(`
    <h1>Here is Sam\'s Express home page</h1>
    <p>Welcome to Samxpress</p>
    
    `)

});

app.get('/about',(req,res)=>{
  res.send(`
    <h1>Welcome to Sam\'s Express about page</h1>
    <p>Welcome to Samxpress</p>
    
    `)

});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
