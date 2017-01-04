import { model, required } from 'spirit.io/lib/decorators';
import { ModelBase } from 'spirit.io/lib/base';

@model()
export class MyModel extends ModelBase {

    constructor(data) {
        super(data);
    }

    @required
    code: string

    example: string;

}