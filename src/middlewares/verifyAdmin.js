const { User } = require("../routeHandler/userHandler");

const verifyAdmin = async (req, res, next) => {
  try {
    const email = req.user.email;
    const user = await User.findOne({ email });
    const isAdmin = user?.role === "admin";
    if (!isAdmin) {
      return res.status(403).send({ message: "forbidden access" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = verifyAdmin;
