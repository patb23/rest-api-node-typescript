"use strict";

import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import {PartySchema} from "../models/party";

const Party = mongoose.model('Party', PartySchema);

export class PartyController{

    public getParty(partyID: String)  {

        return new Party({partyID: partyID, caseID:"23456"})

    }
}