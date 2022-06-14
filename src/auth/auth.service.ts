import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: RegisterAuthDto) {
    const { username, password } = createAuthDto;
    const findUser = await this.userModel.findOne({ username });
    if (findUser)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: ['El usuario ya existe'],
          error: 'Bad request',
        },
        HttpStatus.BAD_REQUEST,
      );

    const plainToHash = await hash(password, 10);
    createAuthDto = { ...createAuthDto, password: plainToHash };
    const userCreated = await this.userModel.create(createAuthDto);
    return userCreated;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto;
    const findUser = await this.userModel.findOne({ username });
    if (!findUser)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: ['El usuario no existe'],
          error: 'Not found',
        },
        HttpStatus.NOT_FOUND,
      );
    const checkPasssword = await compare(password, findUser.password);
    if (!checkPasssword)
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          message: ['Contraseña incorrecta'],
          error: 'Unauthorized',
        },
        HttpStatus.UNAUTHORIZED,
      );

    const payload = { id: findUser.id };
    console.log(process.env.SECRETE_KEY_JWT);
    const token = await this.jwtService.sign(payload);
    return { token };
  }

  async findAll() {
    return await this.userModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  refreshToken() {
    return 'This action returns a new token';
  }
}
