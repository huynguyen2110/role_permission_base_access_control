import express from 'express'
import { list } from '~/controllers/UserController';
import authMiddleware from '~/middleware/auth'
import permissionMiddleware from '~/middleware/permission'

const router = express.Router();

router.get('/', authMiddleware.auth, permissionMiddleware.permission('users:list'), list);

export default router;
