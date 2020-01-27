require('dotenv').config();
const app = require('./app');

app.listen(80, () => {
    console.log('Example app listening on port 80!')
});
