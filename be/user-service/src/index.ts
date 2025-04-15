import express from "express";
import { config } from "./config/config";
import { UserController } from "./presentation/userController";

const app = express();
const userController = new UserController();

app.get("/user", userController.getUser);

app.listen(config.port, () => {
    console.log(`User Service running on port ${config.port}`);
});
