import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import LoginServiceInterface from '../interfaces/LoginServiceInterface';
import validateJWT from '../JWT/validateJWT';
import { FORMAT_INVALID, HTTP_FORMAT_INVALID } from '../utils/statusHTTP';

export default class LoginService implements LoginServiceInterface {
  protected model: ModelStatic<UserModel> = UserModel;

  public async login(mail: string, password: string) {
    const data = await this.model.findOne({ where: { email: mail } });

    if (!data || !bcrypt.compareSync(password, data.dataValues.password)) {
      return { status: HTTP_FORMAT_INVALID, message: FORMAT_INVALID };
    }

    const token = validateJWT.generateToken({ mail, password });

    return { status: null, message: token };
  }
}
