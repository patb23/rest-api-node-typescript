import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import {PhoneSchema} from "../models/phone";

const Phone = mongoose.model('Phone', PhoneSchema);

export class PhoneController{

    public post (req: Request, res: Response) {
        console.log('post called');

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
    
}