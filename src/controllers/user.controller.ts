import { Request, Response } from 'express'; 
import { User } from '../models/user.model';

function create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    user.save((error: any, result: any): void => {
        if (error) {
            console.log('Error: ', typeof error);
            res.json(error);
        }

        console.log('Result: ', typeof result);

        res.status(201).json(result);
    });
}

export { create };