import { Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import authService from '~/services/AuthService'
import { AuthenticatedRequest } from '~/type'

const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      res.status(401).send({ error: 'No authorization header' });
      return;
    }

    const token = authHeader.replace('Bearer ', '');
    const secret = process.env.JWT_SECRET as string;

    const data = jwt.verify(token, secret) as JwtPayload;

    const user = authService.checkUserExits(data.email);
    if (!user) {
      res.status(401).send({ error: 'User not exit' });
      return;
    }

    const isAuthorizedUser = authService.checkUserPermission(req, user)
    if(!isAuthorizedUser) {
      res.status(401).send({ error: 'Not authorized to access this resource' });
      return;
    }

    req.user = user;
    req.token = token;
    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
};

export default { auth };
