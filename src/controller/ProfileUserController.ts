import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    try {

      const service = new ProfileUserService();

      const result = await service.execute(user_id);
      
      return res.json(result);

    } catch (error) {

      const errorMessage = (error as Error).message;

      return res.json({ error: errorMessage});
    }

  }
}

export { ProfileUserController }