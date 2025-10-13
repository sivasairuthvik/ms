const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My Home page');
});

app.listen(port, () => {
  console.log(`My server is on http://localhost:${port}`);
});

app.get('/home',(req,res)=>{
    res.send
});


books=[{
    id:1,
    name:'Hell Life',
    author:'Ruthvik'
},
{
    id:2,
    name:'Something',
    author:'Krishna'
},
{
    id:3,
    name:'Anything',
    author:'Venkat'
}
    ]

app.get('/books',(req,res)=>{

    res.json(books);
});

app.post('/add',(req,res)=>{
    const{name,author}= req.body;

    const new1={
        id,
        name,
        author
    };
    books.push(new1);
    console.log("book added");
    
})