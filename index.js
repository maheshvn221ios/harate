const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Harate Chatbot Hello",
        port: `${PORT}`
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});