


// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const sendVerificationMail= (name, email)=>{

  // toast.success("Mail Sent Successfully!!", {
  //   autoClose: 2000,
  // });
    
    // console.log("name and email is ", name, email)
    const body=`<pre> Dear ${name},
    
    We are pleased to inform you that your account with us has been successfully verified. Our team has reviewed the information provided by you and we are satisfied that everything is in order.
    
    Now that your account has been verified, you can enjoy all the benefits of being our valued customer. You can log in to your account and access all the services and features available to you.
    
    Should you require any assistance or have any questions regarding your account, please do not hesitate to contact our customer support team. They will be more than happy to help you in any way they can.
    
    Thank you for choosing our company as your service provider. We look forward to serving you in the best possible manner.
    
    Best regards,
    
    Seea Garg
     
     --- Admin ---
    Crew Rental</pre>`


window.Email.send({
    Host: "smtp.elasticemail.com",
    Username: "officialjobhunt@gmail.com",
    Password: "620A7378D3F41A97CBA3F358D1C3F364DB8F",
    To: email,
    From: "officialjobhunt@gmail.com",
    Subject: "Account Verification Complete",
    Body: body,
  }).then((message) => {
    if (message !== "OK") {
        console.log("error ")
    }
  });

    //  return (
    //   // <ToastContainer />
    //  )


}
