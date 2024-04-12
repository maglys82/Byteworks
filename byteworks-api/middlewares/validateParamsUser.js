const validateParametersUser = (req, res, next) => {
  console.log("Received Data:", req.body)
  let missingFields;
  if (!req.body) {
    return res.status(400).json({ error: "Missing form data" });
  }
  const { data } = req;
  if (!data) {
    return res.status(400).json({ error: "Missing form data" });
  }

  const requiredFields = ["firstName", "email", "password", "role", "skill", "status"];
  missingFields = requiredFields.filter(field => !data[field]);
  if (missingFields.length) {
    const errorMessage = `Missing required fields: ${missingFields.join(", ")}`;
    return res.status(400).json({ error: errorMessage });
  }

  next();
};

export { validateParametersUser };


