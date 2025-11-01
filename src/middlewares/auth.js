const adminAuth = (req, res, next) => {
  console.log("Admin Auth Middleware Invoked");
  const token = "xyz";
  const isAdminAutharized = token === "xyz";
  if (isAdminAutharized) {
    next(); // User is authenticated, proceed to the next middleware/route handler
  } else {
    res.status(401).send("Unauthorized User: Invalid or missing token");
  }
};

const userAuth = (req, res, next) => {
  console.log("User Auth Middleware Invoked");
  const token = "abcd";
  const isUserAutharized = token === "abcd";
  if (isUserAutharized) {
    next(); // User is authenticated, proceed to the next middleware/route handler
  } else {
    res.status(401).send("Unauthorized User: Invalid or missing token");
  }
};

module.exports = { adminAuth, userAuth };
