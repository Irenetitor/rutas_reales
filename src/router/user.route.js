import express from "express";
import { userProfileController } from "../../controller/user.controller.js";

const router = express.Router();

router.post("/profile", userProfileController);

router.post("/password", (req, res) => {
  res.status(200).send("password post");
});

export default router;
