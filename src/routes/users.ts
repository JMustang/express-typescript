import { Router } from "express";
import { createUser, getUsers, getUsersById } from "../handlers/users";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUsersById);

router.post("/", createUser);

export default router;
