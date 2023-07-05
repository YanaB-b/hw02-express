const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "yanabiliuk@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email={
//   to:"ciydofirdu@gufum.com",
//   from: "yanabiliuk@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost: 3000</p>",
// }
const sendEmail = async (data) => {
  const email = { ...data, from: "yanabiliuk@meta.ua" };
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;
