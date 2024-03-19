import { Router } from "express";
import { getUsers, getUsersById } from "../handlers/users";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUsersById);

export default router;
