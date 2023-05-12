import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import MatchModel from '../database/models/MatchModel';
import { HTTP_CREATED, HTTP_ERROR, HTTP_FORMAT_INVALID, HTTP_SERVER_ERROR, HTTP_STATUS_OK, HTTP_TEAM_ERROR, NOT_TEAM, SERVER_ERROR, TEAM_ERROR, TEAM_ID_ERROR, TOKEN_NOT_FOUND, TOKEN_NOT_VALID } from '../database/utils/statusHTTP';
import { team, finishMatchMessage, matchCreated, matchesInProgressTrue, matchesList, newMatch, noIdsMatch, sameIdsMatch, token, updatedMatchMessage } from './mocks/matches.mock';
import TeamModel from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  describe('MatchesService', () => {
    describe('getAll', () => {
      it('Retornando um array de times', async () => {
        // arrange
        sinon.stub(MatchModel, 'findAll').resolves(matchesList as unknown as MatchModel[]);
        // act
        const { status, body } = await chai.request(app).get('/matches')
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(matchesList)
      });
    });

    describe('getByProgress', () => {
      it('Retorna uma lista de times quando inProgress é true', async () => {
        // arrange
        sinon.stub(MatchModel, 'findAll').resolves(matchesInProgressTrue as unknown as MatchModel[]);
        // act
        const { status, body } = await chai.request(app).get('/matches?inProgress=true')
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(matchesInProgressTrue)
      });
    });

    describe('finishById', () => {
      it('Retorna uma lista de times quando inProgress é true', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves([1]);
        // act
        const { status, body } = await chai.request(app).patch('/matches/45/finish').set({ 'Authorization': token })
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(finishMatchMessage)
      });

      it('Retorna erro se algo inesperado ocorrer', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves([0]);
        // act
        const { status, body } = await chai.request(app).patch('/matches/45/finish').set({ 'Authorization': token })
        // assert
        expect(status).to.be.equal(HTTP_SERVER_ERROR);
        expect(body).to.be.deep.equal({ message: SERVER_ERROR })
      });

      it('Retorna um erro quando não possui token', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves();
        // act
        const { status, body } = await chai.request(app).patch('/matches/45/finish')
        // assert
        expect(status).to.be.equal(HTTP_FORMAT_INVALID);
        expect(body).to.be.deep.equal({ message: TOKEN_NOT_FOUND })
      });

      it('Retorna um erro quando token é inválido', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves();
        // act
        const { status, body } = await chai.request(app).patch('/matches/45/finish').set({ 'Authorization': 123 })
        // assert
        expect(status).to.be.equal(HTTP_FORMAT_INVALID);
        expect(body).to.be.deep.equal({ message: TOKEN_NOT_VALID })
      });
    });

    describe('updateById', () => {
      it('Retorna com sucesso quando atualiza a partida', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves([1]);
        // act
        const { status, body } = await chai.request(app).patch('/matches/2').set({ 'Authorization': token })
        // assert
        expect(status).to.be.equal(HTTP_STATUS_OK);
        expect(body).to.be.deep.equal(updatedMatchMessage)
      });

      it('Retorna erro se algo inesperado ocorrer', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves([0]);
        // act
        const { status, body } = await chai.request(app).patch('/matches/2').set({ 'Authorization': token })
        // assert
        expect(status).to.be.equal(HTTP_SERVER_ERROR);
        expect(body).to.be.deep.equal({ message: SERVER_ERROR })
      });

      it('Retorna um erro quando não possui token', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves();
        // act
        const { status, body } = await chai.request(app).patch('/matches/2')
        // assert
        expect(status).to.be.equal(HTTP_FORMAT_INVALID);
        expect(body).to.be.deep.equal({ message: TOKEN_NOT_FOUND })
      });

      it('Retorna um erro quando token é inválido', async () => {
        // arrange
        sinon.stub(MatchModel, 'update').resolves();
        // act
        const { status, body } = await chai.request(app).patch('/matches/2').set({ 'Authorization': 123 })
        // assert
        expect(status).to.be.equal(HTTP_FORMAT_INVALID);
        expect(body).to.be.deep.equal({ message: TOKEN_NOT_VALID })
      });
    });

    describe('create', () => {
      it('Retorna com sucesso uma partida criada', async () => {
        // arrange
        sinon.stub(MatchModel, 'create').resolves(matchCreated as MatchModel);
        // act
        const { status, body } = await chai.request(app).post('/matches').set({ 'Authorization': token }).send(newMatch);
        // assert
        expect(status).to.be.equal(HTTP_CREATED);
        expect(body).to.be.deep.equal(matchCreated)
      });
    });
  });

  describe('ValidateMatch', () => {
    it('Retorna um erro quando os Ids dos times são iguais', async () => {
      // arrange
      // act
      const { status, body } = await chai.request(app).post('/matches').set({ 'Authorization': token }).send(sameIdsMatch);
      // assert
      expect(status).to.be.equal(HTTP_TEAM_ERROR);
      expect(body).to.be.deep.equal({ message: TEAM_ERROR })
    });

    it('Retorna um erro quando um dos Ids não existe no db', async () => {
      // arrange
      sinon.stub(TeamModel, 'findOne')
        .onFirstCall().resolves(team as TeamModel)
        .onSecondCall().resolves(null);
      // act
      const { status, body } = await chai.request(app).post('/matches').set({ 'Authorization': token }).send(noIdsMatch);
      // assert
      expect(status).to.be.equal(HTTP_ERROR);
      expect(body).to.be.deep.equal({ message: TEAM_ID_ERROR })
    });
  })

});
afterEach(() => {
  sinon.restore();
});
