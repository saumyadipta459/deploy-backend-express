require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000



const githubData = {
    
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    "version": 6.1,
  
  
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('ami saheb')

})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chittaranjan music college </h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2> Guitar and tabla </h2>")
})

app.get('/jsonData', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})