const express = require('express')
const hbs = require('hbs');
//configurar variable de entorno
require('dotenv').config();
const app = express()
const port = process.env.PORT


app.set('view engine', 'hbs');

// Es donde se ubican los archivos a reutilizar
hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public'))

// controlador de la ruta principal
// aqui hacemos el llamdo de home.hbs no es necesario indicar el tipo de archivo
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Perros domestios',
        titulo:'Curso de Node'
    })
})

//para contacto
app.get('/pastor_aleman', (req, res) => {
    res.render('pastor_aleman',{
        animal: 'PASTOR ALEMAN',
        titulo:'Pator aleman'
    })
})

//para infor personal
app.get('/chihuahua', (req, res) => {
    res.render('Chihuahua',{
        animal: 'CHIHUAHUA',
        titulo:'chihuahua'
    })
})

//error 
app.get('*',(req, res)=>{
    res.render('404')
})


//siempre va
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

