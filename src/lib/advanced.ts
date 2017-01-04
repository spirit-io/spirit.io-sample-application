import { run } from 'f-promise';
import { Server } from 'spirit.io/lib/application';
import { Request, Response, NextFunction } from 'express';

const config = {
    port: 3000
};

let server: Server = new Server(config);

// declare `initialized` event listener.
server.on('initialized', function () {
    run(() => {
        console.log("========== Server initialized ============\n");
        // ====================================
        // Do what you want in your application after it has been initialized, 
        // but before it would be started
        server.app.use('/test', function (req: Request, res: Response, next: NextFunction) {
            res.end('It works !');
            next();
        });
        // ====================================

        // Then start the server
        server.start();
    }).catch(err => {
        console.error(err);
    });
});

// declare `started` event listener.
server.on('started', function () {
    run(() => {
        console.log("========== Server started ============\n");
        // ====================================
        // Do what you want in your application after it has been started
        // ...
        // ...
    }).catch(err => {
        console.error(err);
    });
});

// Here is the first entry point...
//
// f-promise encapsulation with `run` function is really important here
// as spirit.io framework use `wait` function usually.
//
run(() => {
    // Call `init` function to initialize your server
    server.init();
}).catch(err => {
    console.error(err);
});