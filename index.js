const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Harate"
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('App listening on port 3000!');
});