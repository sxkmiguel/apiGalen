import { Router } from "express";

import { getUsers, getAttentionByIdCuenta } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getAttentionByIdCuenta);

export default router;