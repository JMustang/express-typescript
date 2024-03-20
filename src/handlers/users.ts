import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUsersById(req: Request, res: Response) {
  res.send({});
}

export function createUser(req: Request<{}, {}, CreateUserDto>, res: Response) {
  req;
}
