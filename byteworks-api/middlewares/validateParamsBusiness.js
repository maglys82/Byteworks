const validateParametersBusiness = (req, res, next) => {
  const { user } = req.body
  if (!user || !user.first_name || !user.email || !user.password || !user.profile || user.profile !== 'Company') {
    return res.status(400).json({ error: "el first name, email, password, profile deben estar presentes" })
  }
  next()
}

export { validateParametersBusiness }
