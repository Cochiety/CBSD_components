import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
    super({
      // Look for the "Bearer <token>" in the Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SECRET_KEY_COCHI', // Must match the key in auth.module.ts
    });
  }

  // If the token is valid, NestJS calls this to attach the user to the request
  async validate(payload: { sub: number; username: string }) {
    const { sub } = payload;
    const user = await this.userRepo.findOne({ where: { id: sub } });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}