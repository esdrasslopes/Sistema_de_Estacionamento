const ParkModel = require("../models/park");

const UserModel = require("../models/user");

const parkController = {
  create: async (req, res) => {
    try {
      const park = {
        carModel: req.body.carModel,
        carBrand: req.body.carBrand,
        carPlate: req.body.carPlate,
        vacancyNumber: req.body.vacancyNumber,
        entryDate: req.body.entryDate,
        exitDate: req.body.exitDate,
        userID: req.body.id
      };

      const response = await ParkModel.create(park);

      res.status(200).json({ response : park, msg: "Parking spot successfully reserved!" });
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "Failed to reserve the parking spot!"  });
    }
  },
  getAll: async (req, res) => {
    try {
      const response = await ParkModel.find();

      res.status(200).json({ response, msg:  "Data successfully retrieved!" });
    } catch (error) {
      res.status(404).json({ msg: "Failed to find parking spots!" });
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;

      const response = await ParkModel.findById(id);

      res.status(200).json({ response, msg: "Parking spot successfully found!" });
    } catch (error) {
      res.status(404).json({ msg: "Failed to find the parking spot!" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const response = await ParkModel.findByIdAndDelete(id);

      res.status(201).json({ response, msg: "Parking spot successfully deleted!" });
    } catch (error) {
      res.status(404).json({ msg: "Failed to delete the parking spot!" });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const park = {
        carModel: req.body.carModel,
        carBrand: req.body.carBrand,
        carPlate: req.body.carPlate,
        vacancyNumber: req.body.carPark,
        entryDate: req.body.entryDate,
        exitDate: req.body.exitDate,
        userID: req.body.id
      };

      const response = await ParkModel.findByIdAndUpdate(id, park);

      res.status(200).json({ park, msg: "Data successfully updated!"});
    } catch (error) {
      res.status(404).json({ msg: "Failed to update the parking spot!" });
    }
  },
};

module.exports = parkController;
