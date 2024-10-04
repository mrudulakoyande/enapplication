const express =require("express");
const cors = require("cors");
const nodemailer =require ("nodemailer");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/send",(req,res)=>{
    let data=[req.body.name,req.body.phone,req.body.query];
    let from ="mrudulakoyande24@hmail.com";
    let to="siddhesh.pokharkar.sp@gmail.com";
    let subject="Enquiry from "+req.body.name;
    let text = "Name = "+req.body.name +""+" Phone = "+req.body.phone + ""+" Query = "+req.body.query;
    
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"mrudulakoyande24@gmail.com",
            pass:"zvii vmdp hjps aevr",
        }
    });

    let mailOptions={
        from:from,
        to:to,
        subject:subject,
        text:text
    }

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)  res.status(500).json(err);
        else     res.status(200).json("Mail sent successfully");

    });
});
app.listen(9000,()=>{console.log("ready@9000")});