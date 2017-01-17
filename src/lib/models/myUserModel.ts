import { model, required } from 'spirit.io/lib/decorators';
import { User } from 'spirit.io-admin-application/lib/models/user';

@model({ useFactory: 'User' })
export class Member extends User {

    constructor(data) {
        super(data);
    }

    nickname: string = "default nickname";
}