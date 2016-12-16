
const HTTP_PORT = process.env.SPIRIT_HTTP_PORT || 3000;

const MONGO_HOST = process.env.SPIRIT_MONGODB_HOST || 'localhost';
const MONGO_PORT = process.env.SPIRIT_MONGODB_PORT || 27017;
const MONGO_DB = process.env.SPIRIT_MONGODB_DB || "spirit_sample";
const MONGO_URL = 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT + '/' + MONGO_DB;

const REDIS_HOST = process.env.SPIRIT_REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.SPIRIT_REDIS_PORT || 6379;
const REDIS_DB = process.env.SPIRIT_REDIS_DB || 0;
const REDIS_URL = 'redis://' + REDIS_HOST + ':' + REDIS_PORT;

const SECRET = process.env.SPIRIT_SESSIONS_SECRET || 'sample.spirit.io';
const path = require('path');

exports.config = {
    expressPort: HTTP_PORT,
    modelsLocation: path.resolve(path.join(__dirname, './models')),
    connectors: {
        mongodb: {
            datasources: {
                "mongodb": {
                    uri: MONGO_URL,
                    options: {}
                }
            },
            mongoose: {
                debug: false
            }
        },
        redis: {
            datasources: {
                "redis:admin": {
                    uri: REDIS_URL + "/1",
                    options: {}
                },
                "redis:sessions": {
                    uri: REDIS_URL,
                    options: {}
                }
            },
            client: {
                debug: false
            }
        }
    },
    sessions: {
        secret: SECRET,
        cookieName: 'spirit.io.sample.sid',
        connector: 'redis-admin',
        redis: {
            ttl: 12000
        }
    }
};