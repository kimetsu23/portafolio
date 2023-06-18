const nodemailer = require('nodemailer'); 

enviarMail= async ()=> {


const config = {
host : 'smtp.gmail.com',
port : 587,
auth : {

    user : '',
    pass : geraldo2020
}




}

const mensaje = {
email: '',
to: 'jeremygeraldo23@gmail.com',
nombre:'',
subject : '',
Text:''

}
const transport = nodemailer.createTransport(config);

const info =  await transport.sendMail(mensaje);
console.log(infog);
}

enviarMail();