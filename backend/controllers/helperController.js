import Helper from "../models/Helper.js";

export const getHelpers = async (req, res) => {
  try {
    const helpers = await Helper.find();
    res.json(helpers);
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const getHelperById = async (req, res) => {
  try {
    const helper = await Helper.findById(req.params.id);
    res.json(helper);
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};
