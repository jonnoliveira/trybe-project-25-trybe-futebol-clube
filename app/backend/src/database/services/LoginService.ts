import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import LoginServiceInterface from '../interfaces/LoginServiceInterface';
import { generateToken } from '../JWT/validateJWT';

export default class LoginService implements LoginServiceInterface {
  protected model: ModelStatic<UserModel> = UserModel;

  public async login(mail: string, password: string) {
    const data = await this.model.findOne({ where: { email: mail } });

    if (!data || !bcrypt.compareSync(password, data.dataValues.password)) {
      return { status: 401, message: 'Invalid email or password' };
    }

    const token = generateToken({ mail, password });

    return { status: null, message: token };
  }
}
