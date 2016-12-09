import { _ } from 'streamline-runtime';
import { AdminServer } from 'spirit.io-admin-application/app';

const cookieParser = require('cookie-parser');

export class SampleApp extends AdminServer {
    constructor(config: any) {
        super(config);
    }
}