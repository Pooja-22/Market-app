
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';
import open from 'open';
import bodyParser from 'body-parser'

const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});