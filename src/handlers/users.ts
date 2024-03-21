import { query, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUsersById(req: Request, res: Response) {
  res.send({});
}

export function createUser(
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<User>
) {
  return res.status(201).send({
    id: 1,
    username: "junior",
    email: "XXXXXXXXXXXXXXXX",
  });
}
