import { User } from '../models/User';
import { RegisterUserDto, UserResponseDto } from '../dtos/user.dto';
import { AppError } from '../middleware/errorHandler';

export class UserService {
  async register(userData: RegisterUserDto): Promise<UserResponseDto> {
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { email: userData.email },
        { username: userData.username }
      ]
    });

    if (existingUser) {
      throw new AppError(
        'User with this email or username already exists',
        400
      );
    }

    // Create new user
    const user = new User(userData);
    await user.save();

    // Generate verification token and send email
    // TODO: Implement email verification

    return {
      id: user._id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
      createdAt: user.createdAt
    };
  }
}

export const userService = new UserService();
