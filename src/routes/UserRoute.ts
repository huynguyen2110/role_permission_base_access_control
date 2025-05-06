import express, { RequestHandler } from 'express'
import { list } from '~/controllers/UserController';
import authMiddleware from '~/middleware/auth'

const router = express.Router();

router.get('/', authMiddleware.auth as RequestHandler, list);

export default router;
