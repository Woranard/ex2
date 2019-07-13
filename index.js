const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Woranard'))
app.get('/about', (req, res) => res.send('หน้า node'))
app.get('/contact', (req, res) => res.send('หน้า เกี่ยวกับ'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))