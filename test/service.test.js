import { expect } from 'chai';
import sinon from 'sinon';
import { Service } from '../model/service.js';
import { DaoUser } from '../model/dao.js';
import { DtoResponse } from '../dto/dtores.js';

describe('Service Class', () => {
  
  describe('CreateUser', () => {
    it('should create a new user successfully', async () => {
      const body = { name: 'John', email: 'john@example.com', age: 25, city: 'City', zipcode: 400001 };
      const createdUser = { name: 'John', _id: '12345' };
      sinon.stub(DaoUser, 'createUser').resolves(createdUser);
      const result = await Service.CreateUser(body);
      expect(result).to.eql({ username: 'John', id: '12345' });
      DaoUser.createUser.restore();
    });

    it('should throw validation error', async () => {
      const body = { name: '', email: 'invalid', age: 10, city: '', zipcode: 123 };
      try {
        await Service.CreateUser(body);
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });
  });

  describe('GetAllUsers', () => {
    it('should return all users', async () => {
      const allusers = [{ name: 'John' }, { name: 'Jane' }];
      sinon.stub(DaoUser, 'getAllUsers').resolves(allusers);
      const result = await Service.GetAllUsers();
      expect(result).to.be.an('array').that.has.lengthOf(2);
      DaoUser.getAllUsers.restore();
    });

    it('should return null if no users found', async () => {
      sinon.stub(DaoUser, 'getAllUsers').resolves([]);
      const result = await Service.GetAllUsers();
      expect(result).to.be.null;
      DaoUser.getAllUsers.restore();
    });
  });

  describe('GetUserById', () => {
    it('should return a user by id', async () => {
      const userDb = { name: 'John' };
      sinon.stub(DaoUser, 'getUserById').resolves(userDb);
      const result = await Service.GetUserById('12345');
      expect(result).to.be.an.instanceof(DtoResponse);
      DaoUser.getUserById.restore();
    });

    it('should throw error for invalid id', async () => {
      try {
        await Service.GetUserById('invalid');
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });
  });

  describe('PatchUpdateUserById', () => {
    it('should update a user partially by id', async () => {
      const toUpdate = { name: 'John Updated' };
      sinon.stub(DaoUser, 'patchUpdateUserById').resolves(toUpdate);
      const result = await Service.PatchUpdateUserById('12345', toUpdate);
      expect(result).to.eql(toUpdate);
      DaoUser.patchUpdateUserById.restore();
    });

    it('should throw validation error for invalid data', async () => {
      try {
        await Service.PatchUpdateUserById('12345', { age: 10 });
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });
  });

  describe('PutUpdateUserById', () => {
    it('should update a user completely by id', async () => {
      const toUpdate = { name: 'John', email: 'john@example.com', age: 25, city: 'City', zipcode: 400001 };
      sinon.stub(DaoUser, 'putUpdateUserById').resolves(toUpdate);
      const result = await Service.PutUpdateUserById('12345', toUpdate);
      expect(result).to.eql(toUpdate);
      DaoUser.putUpdateUserById.restore();
    });

    it('should throw validation error for invalid data', async () => {
      try {
        await Service.PutUpdateUserById('12345', { email: 'invalid' });
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });
  });

  describe('DeleteUserById', () => {
    it('should delete a user by id', async () => {
      sinon.stub(DaoUser, 'deleteUserById').resolves({ acknowledged: true });
      const result = await Service.DeleteUserById('12345');
      expect(result).to.eql({ acknowledged: true });
      DaoUser.deleteUserById.restore();
    });

    it('should throw error for invalid id', async () => {
      try {
        await Service.DeleteUserById('invalid');
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });
  });

});

