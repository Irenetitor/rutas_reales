import express from "express";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).send("ruta profile");
});

router.post("/profile", (req, res) => {
  res.status(200).send("profile en post");
});
router.post("/password", (req, res) => {
  res.status(200).send("ruta profile");
});

export default router;
