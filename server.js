import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('*', (req, res) => {


    res.send('Thid is my appp')
})
app.listen(PORT, () => {
    console.log(`App running ${PORT}`)
})