import { Service } from '../model/service.js';

class Controllers {

  static createUser = async function(req,res) {
    try {
      const { username, id } = await Service.CreateUser(req.body);
      console.log(`a new user ${username} with id ${id} is created`);
      res.send("sent to server");
    } catch (error) {
      res.json({error:error.message});
    }
  }

  static findUsers = async function(req,res) {
    try {
      const arrOfUsers = await Service.GetAllUsers();
      return res.send(arrOfUsers);
    } catch (error) {
      res.json({error:error.message});
    }
  }

  static findOneUser = async function(req,res) {
    try {
      const id = req.params.userId;
      const user = await Service.GetUserById(id);
      res.json({user})
    } catch(error) {
      res.json({error:error.message});
    }
  }

  static updateUserById = async function(req,res) {
    try {
      const id = req.params.userId;
      const toUpdate = req.body;
      const result = await Service.UpdateUserById(id,toUpdate);
      res.json({status:result});
    } catch(error) {
      res.json({error:error.message})
    }
  }
}


export { Controllers };
