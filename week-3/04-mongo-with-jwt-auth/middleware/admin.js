const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. 
  // Check readme for the exact headers to be expected
  const token = req.headers.authorization;      //Bearer token       
  const words=token.split(" ");                 //["Bearer","token"]
  const jwtToken=words[1];                      //token
  try{
    const decodedvalue = jwt.verify(jwtToken,JWT_SECRET);
    if(decodedvalue.username){
      next();
    }else{
      res.status(403).json({
          msg:"you are not authenticated"
      })
    }
  }catch(e){
    res.json({
      msg:"Incorrect Inputs"
    })

  }
  
  

}

module.exports = adminMiddleware;
