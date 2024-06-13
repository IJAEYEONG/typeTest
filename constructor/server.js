
const express = require('express');
const bodyParser = require('body-parser');
const path =require('path')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+"/index.html"))
})
// app.get('/get', (req, res) => {
//     const id = req.query.id;
//     const pwd = req.query.pwd;
//     res.send(`ID: ${id}, Password: ${pwd}`);
// });
// app.post('/post', (req, res) => {
//     const id = req.body.id;
//     const pwd = req.body.pwd;
//     res.send(`ID: ${id}, Password: ${pwd}`);
// });
app.get('/get',(req,res)=>{
  const id =req.query.id;
  const pwd =req.query.pwd;
  const date =req.query.date
  res.send(`ID:${id}<br>Password:${pwd}<br>Date:${date}`)
})
app.post('/post',(req,res)=>{
  const id =req.body.id;
  const pw =req.body.pw;
  const date =req.body.date;
  res.send(`ID:${id}<br>Password:${pw}<br>Date:${date}`)
})
const port = 3000;
app.listen(port, () => {
    console.log(` ${port}`);
});
