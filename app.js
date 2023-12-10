const express = require('express');
const cors = require('cors');
const { PrismaClient } = require("@prisma/client");

const app = express();
const PORT = process.env.PORT || 5000
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

prisma.$connect()
    .then(() => {
        console.log('Database connected');
    }).catch((e) => {
        console.log(e);
        process.exit(1);
    })

app.get('/', (req, res) => {
    res.send('Hello World!');
})

require('./src/routes/writer.routes')(app);
require('./src/routes/article.routes')(app);
require('./src/routes/categories.routes')(app);

app.listen(PORT, () => {
    console.log("Server is running....")
})