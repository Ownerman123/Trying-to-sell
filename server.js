const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./uitls/helpers');

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(router);


app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});