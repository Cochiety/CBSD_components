import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  // Provided Service: Validates the incoming "Syntax" (DTO)
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;

    // For Day 2, we implement basic hardcoded logic to test the capsule
    if (email === 'test@routeme.com' && password === 'password123') {
      return { accessToken: 'success_token_day_2' };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}