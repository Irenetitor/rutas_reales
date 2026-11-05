import { userProfileService } from "../services/user.service.js";


export function userProfileController(req, res) {
  res.status(200).send(userProfileService());
}
