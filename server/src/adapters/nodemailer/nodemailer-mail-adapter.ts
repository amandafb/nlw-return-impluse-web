import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f834c9bcddc4f1",
      pass: "c6049f42e6ee26",
    },
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Amanda Borim <amandafborim@gmail.com>",
      subject,
      html: body
    });
   }
}