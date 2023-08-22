// imports
const express = require('express');
const app = express();
const cors = require('cors');

// settings
// app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));

app.use(cors({
    origin: 'http://localhost:3000'
}));

// import routes
const productRoute = require('./routes/product');

app.use("/products", productRoute);

// server
app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
