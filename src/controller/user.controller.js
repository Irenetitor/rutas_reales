import { userProfileService } from "../services/user.service.js";


export async function userProfileController(req, res) {
  res.status(200).send(await userProfileService());
}
