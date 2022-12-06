const express = require('express');
const app = express();
//  const { db } = require('./firebase');

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get('/' , async(req, res,) => {
 
    res.render('pages/index.ejs');

})

app.get('/addc' , async(req, res,) => {
      
    res.render('pages/addcateg');
  }
  )
  app.get('/get' , async(req, res,) => {
     
    
    res.render('pages/showcateg');

  })
  
const port = process.env.Port || 3000;
app.listen(port, () => console.log(`server is listingin at port :${port}` ))
