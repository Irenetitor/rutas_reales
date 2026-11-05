import express from "express";
import { userProfileController } from "../controller/user.controller.js";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).send("ruta profile");
});

router.post("/profile", userProfileController);

router.post("/password", (req, res) => {
  res.status(200).send("password post");
});

export default router;
