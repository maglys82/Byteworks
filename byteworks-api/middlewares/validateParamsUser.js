const validateParametersUser = (req, res, next) => {
  const { user } = req.body;
  const requiredFields = ["firstName", "email", "password", "role", "skills", "status"];

  const missingFields = requiredFields.filter(field => !user[field]);

  if (missingFields.length) {
    const errorMessage = `Missing required fields: ${missingFields.join(", ")}`;
    return res.status(400).json({ error: errorMessage });
  }

  next();
};

export { validateParametersUser }
