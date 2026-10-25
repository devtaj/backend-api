import ROLES from "../constants/roles.js";

const roleBasedAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  if (req.user.role !== ROLES.SUPERADMIN) {
    return res.status(403).json({
      success: false,
      message: "Access denied",
    });
  }

  next();
};

export default roleBasedAuth;