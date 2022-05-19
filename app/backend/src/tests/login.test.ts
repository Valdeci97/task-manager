import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { Response } from 'superagent';

import app from '../app';
import User from '../database/models/user';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing POST route "/login"', () => {
  let chaiHttpResponse: Response;
  describe('User exists on database', async () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves({
        id: '1',
        email: 'first.user@test.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
      } as User);
    });

    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'first.user@test.com',
      password: 'secret_admin'
    });

    after(() => { (User.findOne as sinon.SinonStub).restore(); });

    it('Should return status code 200', () => {
      expect(chaiHttpResponse.status).to.be.equal(200);
    });

    it('Should return an object with user\'s data', () => {
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.own.property('token');
      expect(chaiHttpResponse.body).to.be.deep.equal({
        id: '1',
        email: 'first.user@test.com',
        token: 'string qualquer',
      });
    })
  });
});
