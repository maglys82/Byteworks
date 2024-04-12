const validparameters = (req, res, next) => {
    const { user } = req.body;

    if (!user || !user.email || !user.password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }
    next();
  }

  export { validparameters };

