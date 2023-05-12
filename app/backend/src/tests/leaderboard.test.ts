import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import TeamModel from '../database/models/TeamModel';
import MatchModel from '../database/models/MatchModel';
import { HTTP_SERVER_ERROR, HTTP_STATUS_OK, SERVER_ERROR } from '../database/utils/statusHTTP';
import { teamList, matchList, homeList, awayList, allList } from './mocks/leaderboard.mock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard', () => {
  describe('Service', () => {
    describe('getHome', () => {
      it('Retornando um array com a classificação dos times quando jogam em casa', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves(teamList as TeamModel[]);
        sinon.stub(MatchModel, 'findAll').resolves(matchList as unknown as MatchModel[]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard/home')
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(homeList)
      });

      it('Retornando uerro se algo acontecer e o array retorna vazio', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves([]);
        sinon.stub(MatchModel, 'findAll').resolves([]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard/home')
        // assert
        expect(status).to.be.equal(HTTP_SERVER_ERROR);
        expect(body).to.be.deep.equal({ message: SERVER_ERROR })
      });
    });

    describe('getAway', () => {
      it('Retornando um array com a classificação dos times quando jogam em casa', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves(teamList as TeamModel[]);
        sinon.stub(MatchModel, 'findAll').resolves(matchList as unknown as MatchModel[]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard/away')
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(awayList)
      });

      it('Retornando uerro se algo acontecer e o array retorna vazio', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves([]);
        sinon.stub(MatchModel, 'findAll').resolves([]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard/away')
        // assert
        expect(status).to.be.equal(HTTP_SERVER_ERROR);
        expect(body).to.be.deep.equal({ message: SERVER_ERROR })
      });
    });

    describe('getAllClass', () => {
      it('Retornando um array com a classificação dos times quando jogam em casa', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves(teamList as TeamModel[]);
        sinon.stub(MatchModel, 'findAll').resolves(matchList as unknown as MatchModel[]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard')
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(allList)
      });

      it('Retornando uerro se algo acontecer e o array retorna vazio', async () => {
        // arrange
        sinon.stub(TeamModel, 'findAll').resolves([]);
        sinon.stub(MatchModel, 'findAll').resolves([]);

        // act
        const { status, body } = await chai.request(app).get('/leaderboard')
        // assert
        expect(status).to.be.equal(HTTP_SERVER_ERROR);
        expect(body).to.be.deep.equal({ message: SERVER_ERROR })
      });

    });
  });
  afterEach(() => {
    sinon.restore();
  })
});
