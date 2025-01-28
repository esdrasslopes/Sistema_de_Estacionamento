const UserModel = require("../models/user");

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      };

      const response = await UserModel.create(user);

      res.status(200).json({ user, msg: "User successfully created!" });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Could not create the user!" });
    }
  },
  getAll: async (req, res) => {
    try {
      const response = await UserModel.find();

      res.status(200).json({ response, msg: "Data retrieved successfully!" });
    } catch (error) {
      res.status(404).json({ msg: "Could not retrieve users!" });
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;

      const response = await UserModel.findById(id);

      res
        .status(200)
        .json({ response, msg: "User successfully retrieved!" });
    } catch (error) {
      res.status(404).json({ msg: "Could not retrieve the user!" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const response = await UserModel.findByIdAndDelete(id);

      res.status(201).json({ response, msg: "User successfully deleted!" });
    } catch (error) {
      res.status(404).json({ msg: "Could not delete the user!" });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const user = {
        name: req.body.name,
        email: req.body.email,
        userDocument: req.body.userDocument,
        password: req.body.password,
        confirmPassword: req.body.confirmPasswordn,
      };

      const response = await UserModel.findByIdAndUpdate(id, user);

      res.status(200).json({ user, msg: "Dado atualizado com sucesso" });
    } catch (error) {
      res.status(404).json({ msg: "Não foi possível atualizar o cadastro!" });
    }
  },
};

module.exports = userController;
