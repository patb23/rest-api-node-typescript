import {Request, Response, NextFunction} from "express";
import { ContactController } from "../controllers/crmController";
import { PhoneController } from "../controllers/phoneController";

export class Routes { 
    
    public contactController: ContactController = new ContactController();

    public  phoneController : PhoneController =  new PhoneController();

    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Contact 
        app.route('/contact')
        .get(this.contactController.getContacts)

        // POST endpoint
        .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)

        app.route('/party:partyID/phoneNumbers')
            .get(this.phoneController.get)
            .post(this.phoneController.post)
            .put(this.phoneController.put)

        app.route('/party:partyID/phoneNumbers:phoneNumberID')
            .patch(this.phoneController.patch)
            .delete(this.phoneController.delete)

    }
}