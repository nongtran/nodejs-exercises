import { Request, Response } from "express";

export class UserController {
    getUser(req: Request, res: Response) {
        // Controller logic
        res.send("User data");
    }
}
