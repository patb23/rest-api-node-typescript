import * as mongoose from 'mongoose';

import {PhoneSchema} from "./phone";

const Schema = mongoose.Schema;

export const PartySchema = new Schema({

    partyID: {type: 'integer', format: 'int64', example: 1234},
    caseID: {type: 'integer', format: 'int64', example: 33334452},
    phoneNumbers:
        {
            type: [PhoneSchema],
        }
});


