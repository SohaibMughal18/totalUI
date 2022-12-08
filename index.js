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
  app.get('/getc' , async(req, res,) => {
     
    res.render('pages/showcateg');

  })
  app.get('/editc/:id' , async(req, res,) => {
     
    res.render('pages/editcat',{
      id : req.params.id,
    });

  })
  app.get('/delc/:id' , async(req, res,) => {
     
    res.render('pages/showcateg',{
      id : req.params.id,
    });

  })

 




app.get('/addp' , async(req, res,) => {
      
    res.render('pages/addprod');
  }
  )
  app.get('/getp' , async(req, res,) => {
     
    
    res.render('pages/showprod');

  })
  app.get('/editp/:id' , async(req, res,) => {
   
    res.render('pages/editprod',{
      id : req.params.id,
    });

  })
  
const port = process.env.Port || 3000;
app.listen(port, () => console.log(`server is listingin at port :${port}` ))
