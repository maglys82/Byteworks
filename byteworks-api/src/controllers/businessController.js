import { createBusiness } from "../models/createBusinessModel.js";

const createNewBusiness = async (req, res) => {
  try {
    const { firstName, email, password, role, type_of_service } = req.body;
    const newBusinessObject = await createBusiness(firstName, email, password, role, type_of_service);
    if (newBusinessObject.message === "Business registered successfully!") {
      console.log("Business registered successfully!");
      res.status(201).json({ message: "Business registered successfully!", newbusiness: newBusinessObject.newBusiness });
    } else {
      console.error("Error creating business:", newBusinessObject.error);
      res.status(400).json({ message: newBusinessObject.message });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export { createNewBusiness };