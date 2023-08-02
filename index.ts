import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import homeRouter from './routes/home'; 


const app = express();

app.use(cookieParser());
app.use(csrf({ cookie: true }));


app.set('views', __dirname + '/views');

app.use('/', homeRouter);


app.listen(3000, () => {
    console.log(process.env.HOST_URL);
});


