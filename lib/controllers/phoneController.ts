import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import {PhoneSchema} from "../models/phone";
import {PartySchema} from "../models/party";
import {PartyController} from "./partyController";
import * as _ from 'lodash';

const Phone = mongoose.model('Phone', PhoneSchema);
const partyController = new PartyController();
export class PhoneController{

    public post (req: Request, res: Response) {
        console.log(req.params);
        let phone = new Phone(req.body);
       let party  =  partyController.getParty(req.params['partyID'])
        phone.caseID = party.caseID;
        console.log(phone.caseID);
        phone.save((err, phone) =>{
            console.log(err);
            if(_.isUndefined(err))
                res.json(phone).status(200);
            else{
                res.json(phone).status(403);
            }
        });

    }


    public get (req: Request, res: Response) {
        console.log('get              called');
        res.status(200).json({"status": "successful"});
    }

    public put (req: Request, res: Response) {
        console.log('put called');
    }

    public patch(req:Request, res: Response){
    console.log('patch called');
    }


    public delete (req: Request, res: Response) {
        console.log('delete called');
    }

// access modifier is set to public - for stub to work though a workaround exists - https://stackoverflow.com/a/47432826/889474

    public  isUpdateEligible(partyID: String) : boolean{

        return true;
    }
}