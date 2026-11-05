import { userProfileModel, getUsersModel } from "../model/user.model.js";

export async function userProfileService(userID) {
  const usuarios = await getUsersModel();
  
  const user = usuarios.find((usuario) => usuario.id == userID);

  return user;
}

export function getUsersService() {
  return getUsersModel();
}
