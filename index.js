"use strick";
const header = document.querySelector(".header");
const btns = document.querySelectorAll(".hd--btn");

btns.forEach(elemento => { 
    elemento.addEventListener("click",()=>{ 
        header.style.position = "relative" ;
     })
 } )

 //------------------ NAV DESPELGABLE----------------------

 const nav_burger = document.querySelector(".nav-toggle");
 const nav_items  = document.querySelectorAll(".nav-items");
 
 let watching = matchMedia("(max-width:820px)")
 let interruptor = true;

 nav_burger.addEventListener("click",(e)=>{
    e.preventDefault
    header.style.position = "relative" ;
    
    if(interruptor == true && watching.matches == false) { 
        document.querySelector(".nav").style.transform =  "translateX( -320px)"
        interruptor = false;
    } 
    else if(interruptor == false && watching.matches == false)  { 
        document.querySelector(".nav").style.transform =  "translateX(320px)"
        interruptor = true;
        
    }
    else if (interruptor == true && watching.matches == true) { 
        document.querySelector(".nav").style.transform =  "translateX(-100%)"
        interruptor = false;
       
    } 
    else if (interruptor == false && watching.matches == true) {
        document.querySelector(".nav").style.transform =  "translateX(0%)"
        interruptor = true;
        
    }
  
 })

 nav_items.forEach(elemento => { 
    elemento.addEventListener("click",()=>{ 
        if (watching.matches == true) { 
            document.querySelector(".nav").style.transform =  "translateX(0%)"
            interruptor = true;
        } 
        else if (watching.matches == false) { 
            document.querySelector(".nav").style.transform =  "translateX(320px)"
            interruptor = true;
            
        }
     })
 } )

/*---------------------------  FORM  ----------------------------------------------------------- */

let enviar = document.getElementById("btn-submit");

let sendForm = async()=>{
    let _nombre = document.getElementById("name");
    let _email = document.getElementById("email");
    let _message = document.getElementById("message");

    let options = {
        method: "POST", 
        body: JSON.stringify({
            "_nombre": `${_nombre.value}`,
            "_email": `${_email.value}`,
            "_message": `${_message.value}`
        }),
        headers: {"Content-Type":"application/json"}
    }

    console.log("btn alcanzado", options.body);
    
    let peticion  = await fetch(`http://localhost:4200/email`, options)
    let resultado = await peticion.json()
  
}

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    sendForm();
    
    let _nombre = document.getElementById("name"); let _email = document.getElementById("email");
    let _message = document.getElementById("message");

    // console.log("btn alcanzado");

    setTimeout(()=>{  _nombre.value=""; _email.value= ""; _message.value=""; },500) 
    
})