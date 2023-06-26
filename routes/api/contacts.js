const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put("/:id", authenticate, isValidId, ctrl.updateContact);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  ctrl.updateStatusContact
);

module.exports = router;
