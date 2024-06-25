const express=require('express')
const path=require('path')
const app=express()

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));

const employeedetails=[];

// const employeeRoutes = require('');
// app.use('/employees', employeeRoutes);

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/add',(req,res)=>
{
    res.sendFile(path.join(__dirname,'public','Add.html'))
})
app.get('/details',(req,res)=>
{
    res.sendFile(path.join(__dirname,'public','employee.html'))
});

app.post('/adddetail',(req,res)=>{
  const {ID,empname,role}=req.body;
  const data={ID,empname,role};
  employeedetails.push(data)
  console.log(employeedetails)
  res.sendFile(path.join(__dirname,'public','employee.html'))
})

app.get('/alldata',(req,res)=>{
  res.json(employeedetails);
  
})

app.listen(3002, () => {
    console.log('Server is running on port 3002');
  });