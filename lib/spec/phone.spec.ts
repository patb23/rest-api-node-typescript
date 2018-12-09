"use strict";

import app from '../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;


describe('relay the request to message broker', function () {

    it('calls to message broker include all mandatory header fields', ()=>{

    })
    it(' the policy details are pulled from the summary cached for the profile and attached to the message broker request', ()=>{

    })
});


// following are the integration test scenarios for the user story scenarios

describe('get all phone numbers ', () => {

    describe(' when valid party id passed', () => {

        it('should return list of all phone numbers for the party', () => {

        })
        it('the party list is returned from the mongoose', () => {

        })

    })

    describe(' when party id is not found', ()=>{

        it('should return status code 400 - invalid id ', ()=>{

        })
    })

})


describe('delete a phone for the party', ()=>{

    it('should return a success response upon deletion', ()=>{

    })

    describe('the cached profile summary has only one phone listed  ', ()=>{
        describe('the phone number matches that in the request', ()=>{
            it('should return error code 400 - Invalid ID supplied ', ()=>{

            })
        })
        describe(' the phone number doesn\'t match', ()=>{
            it('should return error code 404 - Phone not found', ()=>{

            })
        })
    })


})


describe('update phone for the party', ()=>{

    describe('the validation rule fails ', ()=>{
        it(' returns error status code 400', ()=>{

        })
    })
    describe('when validation allows update', ()=>{
        it('should return error when the phone is already associated with W/M/H', ()=>{

        })
        it('update should succeed when the phone is not already associated', ()=>{

        })
    })

})

describe('associate phone for the party', ()=>{

    // test scenarios for this use case
})