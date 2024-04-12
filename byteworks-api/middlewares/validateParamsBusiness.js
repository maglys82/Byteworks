const validateParametersBusiness = (req, res, next) => {
    const { user } = req.body;
    const requiredFields = ["firstName", "email", "password", "role", "type_of_service"];
  
    const missingFields = requiredFields.filter(field => !user[field]);
  
    if (missingFields.length) {
      const errorMessage = `Missing required fields: ${missingFields.join(", ")}`;
      return res.status(400).json({ error: errorMessage });
    }
  
    next();
  };
  
  export { validateParametersBusiness }
  