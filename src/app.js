const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const applySecurityMiddlewares = require('./config/security');
const setupSwaggerDocs = require('./config/swagger');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

applySecurityMiddlewares(app);

app.use('/api/v1/examples', exampleRoutes);

setupSwaggerDocs(app);

module.exports = app;
