const express = require("express");
const {
  registration,
  userLogin,
  logOut,
  allUsers,
} = require("../controller/userRegistrationController");

const router = express.Router();

router.post("/registration", registration);
router.post("/login", userLogin);
router.get("/logout/:id", logOut);
router.get("/AllUsers", allUsers);

module.exports = router;
