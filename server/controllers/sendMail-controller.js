// import nodemailer from "nodemailer"



// export const sendMail= async(req,res)=>{
//   let testAccount= await nodemailer.createTestAccount();
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: testAccount.user, // generated ethereal user
//           pass: testAccount.pass, // generated ethereal password
//         },
//       });

//         // send mail with defined transport object
//   let message ={
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   };

//   transporter.sendMail(message).then((info)=>{
//     return res.status(200).json({msg:"you shoud receive an email",
//     info:info.messageId,
//     preview:nodemailer.getTestMessageUrl(info)

// })
//   }).catch(error=>{
//       return res.status(500).json({error:error.message})
//   })


// }