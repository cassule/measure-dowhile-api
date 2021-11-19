import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).json({
      errorCode: 'token.invalid'
    });
  }

  const [,token] = authToken.split(" ");
  try {
  
    const { sub } = verify(token, "c202734d9315f14c3d31553d5172c07b") as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).json({ errorCode: 'token.invalid' });
  }

}