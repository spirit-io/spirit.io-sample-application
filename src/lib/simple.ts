import { run } from 'f-promise';
import { Server } from 'spirit.io/lib/application';
import { Request, Response, NextFunction } from 'express';

// Declare your configuration
const config = {
    port: 3000
};

//
// f-promise encapsulation with `run` function is really important here
// as spirit.io framework use `wait` function usually.
//
run(() => {
    let server: Server = new Server(config);
    server.init().start();
    // ====================================
    // Do what you want in your application
    server.app.use('/test', function (req: Request, res: Response, next: NextFunction) {
        res.end('It works !');
        next();
    });
    // ====================================
}).catch(err => {
    console.error(err);
});