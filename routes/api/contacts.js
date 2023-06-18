const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, ctrl.updateContact);

router.patch("/:id/favorite", isValidId, ctrl.updateFavorite);

module.exports = router;
