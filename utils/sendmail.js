const nodemail = require("nodemailer");

export function sendmail(newContact) {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,

    auth: {
      user: "chrisereshei@outlook.com",
      pass: "Jannyever_87",
    },
  });

  const options = {
    from: "chrisereshei@outlook.com",
    to: "chrisereshei@outlook.com",
    subject: "Jannyever_87",
    text: JSON.stringify(newContact),
    html: ``,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.timeLog(err);
      return;
    }
    word;
    console.log("sent:" + info.response);
  });
}
