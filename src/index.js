const express = require ("express");
const cors    = require("cors");
const colors  = require("colors");
const nodemailer = require("nodemailer");
// const { send } = require("node-dev/lib/ipc");

const app = express();
app.set('PORT',  4200)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));  

app.post('/email', (req, res)=>{                                                      
 
    let _valor1 = req.body._nombre; let _valor2 = req.body._email; 
    let _valor3 = req.body._message;

    // console.log( _valor1.red, _valor2.red, _valor3.red )

    async function main() {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
            user: "martin.volpini@gmail.com", // generated user
            pass: "wqubqkqvgbfplcew", // generated password
            },
        });
        
        // transporter.verify(()=>{
        //     console.log('Ready for send email'.green)
        // });
        
        // EL OBJ DEL MENSAJE , LOS DATOS QUE QUERES ENVIAR
        let info = await transporter.sendMail({//ES UNA FUNCION ASINCRONA POR ESO EL AWAIT
            from:`Porfolio ${_valor2}`, // sender address
            to: "martin.volpini@gmail.com", // list of receivers
            subject: `Porfolio Mensaje`, // Subject line
            html: `
            <h1>Mensaje del porfolio</H1><br>
            <b>NOMBRE: ${_valor1}</b><br><br>
            <b>EMAIL: ${_valor2}</b><br><br>
            <b>MENSAJE:</b><br>
            <b>${_valor3}</b>
            `// html body
        });

    }
    main().catch(console.error)
    
})

app.get(`/`,(req,res)=>{
    res.send({msg:"Hola TinCode"})
})
    

app.listen( app.get('PORT'), () => { console.log(`EXPRESS puerto ${app.get('PORT')}`.yellow) } );