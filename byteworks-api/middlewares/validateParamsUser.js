const validateParametersUser = (req, res, next) => {
    const { user } = req.body
    if (!user || !user.first_name || !user.last_name || !user.email || !user.password || !user.profile || user.profile !== 'Talent') {
        return res.status(400).json({ error: "el first name, last name, email, password, profile deben estar presentes" })
    }
    next()
}

export { validateParametersUser }
