import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { Response } from 'superagent';

import { app } from '../app';
import User from '../database/models/user';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing POST route "/login"', () => {
  let chaiHttpResponse: Response;
  describe('User exists on database', async () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({
        id: 1,
        email: 'first.user@test.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
      } as User);
    });

    after(() => { (User.findOne as sinon.SinonStub).restore(); });

    it('Should return status code 200', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'first.user@test.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.P'
      });
      expect(chaiHttpResponse.status).to.be.equal(200);
    });

    it('Should return an object with user\'s data', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'first.user@test.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.P'
      });
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body.token).to.exist;
    })
  });
});

describe('Testing Post route /login with wrong information', () => {
  let chaiHttpResponse: Response;
  describe('When email is not informed', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({} as User);
    });

    after(() => { (User.findOne as sinon.SinonStub).restore(); });

    it('Should return status code 400 and an error message', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: '',
        password: '154828252'
      });
      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.exist;
      expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    });
  });

  describe('When password is not informed', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({} as User);
    });

    after(() => { (User.findOne as sinon.SinonStub).restore(); });

    it('Should return status code 400 and an error message', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: 'teste@test.com',
        password: ''
      });
      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body.message).to.exist;
      expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
    });
  })
});
