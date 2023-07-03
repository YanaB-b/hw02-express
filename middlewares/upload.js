const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
//   imageOptions: {
//     resize: { width: 250, height: 250 },
//   },
//   limits: {
//     fileSize: 2 * 1024 * 1024,
//   },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
