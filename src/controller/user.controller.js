import { userProfileService, getUsersService } from "../services/user.service.js";


export async function userProfileController(req, res) {
  res.status(200).send(await userProfileService(req.body.id));
}

export async function getUsersController(req, res){
  
  res.status(200).send(await getUsersService())
}