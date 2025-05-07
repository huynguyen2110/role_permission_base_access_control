import { Response, NextFunction } from 'express';
import authService from '~/services/AuthService'
import { AuthenticatedRequest } from '~/type'

const permission = (screenName: string) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction)=> {
    try {
      const isAuthorizedUser = authService.checkUserPermission(req, screenName)
      if(!isAuthorizedUser) {
        res.status(401).send({ error: 'Not authorized to access this resource' });
        return;
      }
      next();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      res.status(401).send({ error: 'Not authorized to access this resource' })
    }
  }

};

export default { permission };
