import { getBusiness } from "../models/businessModel.js"
import { findError } from "../utils/utils.js"

const getAllBusiness = async (req, res) => {
  const user = req.user
  try {
    const business = await getBusiness();
    res.status(200).json({ business: business, user: user })
  } catch (error) {
    console.log(error)
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message })
  }
}

export { getAllBusiness }