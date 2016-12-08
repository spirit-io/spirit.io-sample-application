import { _ } from 'streamline-runtime';
import { collection, unique, required } from 'spirit.io/lib/decorators';
import { ModelBase } from 'spirit.io/lib/base';

@collection()
export class MyModel extends ModelBase {

    constructor(data) {
        super(data);
    }

    @unique @required
    code: string

    example: string;

}