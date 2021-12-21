import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './models/user.repository';
import * as bcrypt from 'bcrypt';
import { UserAuthTokenRepository } from './models/user-auth-token.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userAuthTokenRepository: UserAuthTokenRepository,
  ) {}

  async create(user: UserDto) {
    const createUser = this.userRepository.create(user);
    const saveUser = await this.userRepository.save(createUser);
    const createUserAuthToken = this.userAuthTokenRepository.create({
      user_id: saveUser.id,
    });

    await this.userAuthTokenRepository.save(createUserAuthToken);

    return saveUser;
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ id });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOneByProviderAndEmail(user: UserDto) {
    return this.userRepository.findOne({
      provider: user.provider,
      email: user.email,
    });
  }

  async setHashedRefreshToken(id: string, refreshToken: string) {
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);

    return this.userAuthTokenRepository.update(
      { user_id: id },
      { hashed_refresh_token: hashedRefreshToken },
    );
  }
}