import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK) // Returns 200 instead of 201 (standard for sign-in)
  async signIn(
    @Body() authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    // The controller delegates the identity verification to the Service
    return await this.authService.signIn(authCredentialsDto);
  }
}