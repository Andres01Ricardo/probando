require ('dotenv').config();
const hbs = require('hbs');
const express = require('express')

const app = express()

const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.render('home',{
        nombre:'Ricardo Hernandez',
        titulo:'Curso de Node'
    });
})

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre:'Ricardo Hernandez',
        titulo:'Curso de Node'
    })
})
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'Ricardo Hernandez',
        titulo:'Curso de Node'
    })
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname +'/public/404.html');
})

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`)
})