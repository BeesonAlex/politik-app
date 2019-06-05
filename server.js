const express = require('express');
const serverRoutes = require('./routes/server-routes');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('assets'));

app.use('/data', serverRoutes);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
    console.log('Politik data ready!')
});