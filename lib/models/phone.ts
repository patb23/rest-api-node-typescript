import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhoneSchema = new Schema({
    phoneNumberID: {
        type: Number,
        format: 'int64',
        required: true,
        example: 1234
    },
    caseID: {
        type: Number,
        format: 'int64',
        example: 33334452
    },
    countryCallingCode: {
        type: String,
        example: '1',
        required: true
    },
    localAreaCode: {
        type: String,
        required: true,
        example: '908'
    },
    localPhoneNumber: {
        type: String,
        required: true,
        example: '867-5309'
    },
    extension: {
        type: String,
        example: '3456'
    },
    type: {
        type: String,
        required: true,
        example: 'Home'
    }
});