import { Service } from '../model/service.js';

class Controllers { 

  static findUsers = async function(req,res) {
    try {
      const arrOfUsers = await Service.GetAllUsers();
      return res.json({"users":arrOfUsers});
    } catch (error) {
      res.json({error:error.message});
    }
  }

  static findOneUser = async function(req,res) {
    try {
      const id = req.params.userId;
      const user = await Service.GetUserById(id);
      res.json({user:user})
    } catch(error) {
      res.json({error:error.message});
    }
  }

  static createUser = async function(req,res) {
    try {
      const { username, id } = await Service.CreateUser(req.body);
      console.log(`a new user ${username} with id ${id} is created`);
      res.send({status:`${username} has been created`});
    } catch (error) {
      res.json({error:error.message});
    }
  }

  static patchUpdateUserById = async function(req,res) {
    try {
      const id = req.params.userId;
      const toUpdate = req.body;
      const result = await Service.PatchUpdateUserById(id,toUpdate);
      res.json({status:result});
    } catch(error) {
      res.json({error:error.message})
    }
  }

  static putUpdateUserById = async function(req,res) {
    try {
      const id = req.params.userId;
      const toUpdate = req.body;
      const result = await Service.PutUpdateUserById(id,toUpdate);
      res.json({status:result});
    } catch(error) {
      res.json({error:error.message})
    }
  }

  static deleteUserById = async function(req,res) {
    try {
      const id = req.params.userId;
      const result = await Service.DeleteUserById(id);
      res.json({status:result});
    } catch (error) {
      res.json({error:error.message})
    }
  }
}


export { Controllers };
