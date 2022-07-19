const express = require('express')
const cors = require('cors');
const WoodBoardRouter = require('./routes/woodBoard_route')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
var corsOptions = {
    origin: "http://localhost:3000",
};

app.options("*", cors());
app.use(cors(corsOptions));
app.use('/api', WoodBoardRouter)

app.listen(PORT, () => console.log(`server started on ${PORT}`))