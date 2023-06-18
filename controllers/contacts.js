const { HttpError, ctrlWrapper } = require("../helpers");
const Contact = require("../models/cotnact");
const schemas = require("../schemas/contacts");


const listContacts = async (req, res) => {
  const result = await Contact.find();
  res.status(200).json(result);
};
const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};
const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};
const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Contact deleted",
  });
};
const updateContact = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw HttpError(
      400,
      `missing required ${error.details[0].context.label} field`
    );
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};
const updateStatusContact = async (req, res) => {
  const { error } = schemas.updateFavoriteSchemas.validate(req.body);
  if (error) {
    throw HttpError(400, `missing field favorite`);
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};


module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
