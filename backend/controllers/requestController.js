import Request from "../models/Request.js";

export const createRequest = async (req, res) => {
  try {
    const { helperId, date, hours, amount } = req.body;

    const request = new Request({
      customerId: req.user._id,
      helperId,
      date,
      hours,
      amount,
    });

    await request.save();
    res.json({ msg: "Request created", request });
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({ customerId: req.user._id }).populate("helperId");
    res.json(requests);
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};
