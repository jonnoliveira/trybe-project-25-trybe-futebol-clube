import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Model } from 'sequelize';
import {
  invalidEmail,
  invalidEmailFour,
  invalidEmailOne,
  invalidEmailThree,
  invalidEmailTwo,
  invalidPass,
  noEmail,
  noPass,
  dataUser,
  userLogin,
  role,
  token
} from './mocks/login.mock';
import {
  BAD_REQUEST,
  FORMAT_INVALID,
  HTTP_BAD_REQUEST,
  HTTP_FORMAT_INVALID,
  HTTP_STATUS_OK,
  TOKEN_NOT_FOUND,
  TOKEN_NOT_VALID
} from '../database/utils/statusHTTP';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  describe('ValidateLogin', () => {
    it('Retorna um erro quando email não é passado', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(noEmail)
      // assert
      expect(data.status).to.be.equal(HTTP_BAD_REQUEST);
      expect(data.body).to.be.deep.equal({ message: BAD_REQUEST });
    });

    it('Retorna um erro quando o password não é passado', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(noPass)
      // assert
      expect(data.status).to.be.equal(HTTP_BAD_REQUEST);
      expect(data.body).to.be.deep.equal({ message: BAD_REQUEST });
    });

    it('Retorna um erro quando o email é inválido (1)', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidEmailOne)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

    it('Retorna um erro quando o email é inválido (2)', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidEmailTwo)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

    it('Retorna um erro quando o email é inválido (3)', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidEmailThree)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

    it('Retorna um erro quando o email é inválido (3)', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidEmailFour)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

    it('Retorna um erro quando o email é válido mas não cadastrado no db', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidEmail)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

    it('Retorna um erro quando o password tem menos que 7 caracteres ', async () => {
      // arrange
      // act
      const data = await chai.request(app).post('/login').send(invalidPass)
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: FORMAT_INVALID });
    });

  });

  describe('LoginService', () => {
    it('Retorna sucesso quando os dados são válidos ', async () => {
      // arrange
      sinon.stub(Model, 'findOne').resolves(dataUser)
      // act
      const data = await chai.request(app).post('/login').send(userLogin)
      // assert
      expect(data.status).to.be.equal(HTTP_STATUS_OK);
      expect(data.body).to.have.property('token');
    });
  });

  describe('LoginController', () => {
    it('Retorna com sucesso a role do usuário', async () => {
      // arrange
      // act
      const data = await chai.request(app).get('/login/role').set({ 'Authorization': token })
      // assert
      expect(data.status).to.be.equal(HTTP_STATUS_OK);
      expect(data.body).to.be.deep.equal(role);
    });
  })

  describe('ValidateToken', () => {
    it('Retorna com erro caso não tenha token', async () => {
      // arrange
      // act
      const data = await chai.request(app).get('/login/role')
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: TOKEN_NOT_FOUND });
    });

    it('Retorna com erro caso o token seja inválido', async () => {
      // arrange
      // act
      const data = await chai.request(app).get('/login/role').set({ 'Authorization': 123 })
      // assert
      expect(data.status).to.be.equal(HTTP_FORMAT_INVALID);
      expect(data.body).to.be.deep.equal({ message: TOKEN_NOT_VALID });
    });
  })

  afterEach(() => {
    sinon.restore();
  })
});
