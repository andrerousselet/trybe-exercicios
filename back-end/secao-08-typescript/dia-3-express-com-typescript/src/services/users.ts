import * as userModel from "../models/users";

export const getAll = async () => {
  const users = await userModel.getAll();
  return users;
}

