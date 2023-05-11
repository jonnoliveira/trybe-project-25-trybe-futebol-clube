import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { team, teamsList } from './mocks/teams.mock';
import TeamModel from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
  describe('getAll', () => {
    it('Retornando um array de times', async () => {
      // arrange
      sinon.stub(TeamModel, 'findAll').resolves(teamsList as TeamModel[]);
      // act
      const { status, body } = await chai.request(app).get('/teams')
      // assert
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(teamsList)
    });
  });
  describe('getById', () => {
    it('Retorna um único time', async () => {
      // arrange
      sinon.stub(TeamModel, 'findOne').resolves(team as TeamModel);
      // act
      const { status, body } = await chai.request(app).get('/teams/3')
      // assert
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(team)
    });

    it('Retorna uma mensagem de erro', async () => {
      // arrange
      sinon.stub(TeamModel, 'findOne').resolves();
      // act
      const { status, body } = await chai.request(app).get('/teams/3333')
      // assert
      expect(status).to.be.equal(404);
      expect(body).to.be.deep.equal({ message: 'Team not found' })
    });
  });
  afterEach(() => {
    sinon.restore();
  })
});
