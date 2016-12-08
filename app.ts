/// <reference path="node_modules/spirit.io/index.d.ts" />
import { _ } from 'streamline-runtime';
import { AdminServer } from 'spirit.io-admin-application/app';

const cookieParser = require('cookie-parser');

export class SampleApp extends AdminServer {
    constructor(config: any) {
        super(config);

        this.on('initialized', () => {
            console.log("========== Server initialized ============\n");
        });
        console.log("\n========== Initialize server begins ============");

    }
}