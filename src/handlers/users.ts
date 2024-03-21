import { query, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUsersById(req: Request, res: Response) {
  res.send({});
}

export function createUser(
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response
) {
  req;
  req.query.loginAfterCreate;
}
