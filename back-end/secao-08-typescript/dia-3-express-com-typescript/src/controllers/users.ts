import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as userService from "../services/users";

export const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  return res.status(StatusCodes.OK).json(users);
}

