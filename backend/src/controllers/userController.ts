import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { userService } from '../services/userService';
import { RegisterUserDto } from '../dtos/user.dto';

export class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      // Validation check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userData: RegisterUserDto = req.body;
      const user = await userService.register(userData);

      res.status(201).json({
        status: 'success',
        message: 'Registration successful. Please check your email for verification.',
        data: user
      });
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
