import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

export default (err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong'})
};
