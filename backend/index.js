const express = require("express")
const router = require('./src/routes/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

require("./src/config/db")

app.listen(5000, () => {
	console.log("Server has started!")
})



app.use(bodyParser.json())

app.use(cors())


app.use("/api", router)

