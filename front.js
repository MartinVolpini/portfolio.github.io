"use strick";
 //------------------ HEADER DESTRABADO----------------------
const header = document.querySelector(".header");
const btns = document.querySelectorAll(".hd--btn");

header.style.position = "relative" ;

// btns.forEach(elemento => { 
//     elemento.addEventListener("click",()=>{  
//         header.style.position = "relative" ;
//      })
//  } )

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

 /*-----------------Proyectos--------------------------------------- */

  let customButton = document.getElementById("custom-button");  
   
//   customButton.classList.add("custom-button-active"); 
  
  
  customButton.addEventListener("touchstart", function() {
    customButton.classList.add("custom-button-active");
    // alert("evento touchstart")
  });

  customButton.addEventListener("touchend", function() {
    // alert("evento touchend")
    customButton.classList.remove("custom-button-active");
    
  });

//   customButton.addEventListener("touchenter", function() {
//     customButton.classList.add("custom-button-active");
//     alert("evento touchenter")
//   });

//   customButton.addEventListener("touchout", function() {
//     alert("evento touchout")
//     customButton.classList.remove("custom-button-active");
    
//   });



 let tag_a = document.querySelectorAll(".py--items--link")

 let validacion = 0; 

 tag_a.forEach( elemento => { 
//     console.log(elemento);
    elemento.removeAttribute("href");

   
    validacion == 0 ? elemento.removeAttribute("href") 
                    : setTimeout( () => {
                        validacion = 0  
                        // console.log(validacion)
                        } ,9000)


    elemento.addEventListener("click",(e)=>{
        validacion = 1;

        if(elemento == tag_a[0] ){
            setTimeout(()=>{
                elemento.setAttribute("href","https://martinvolpini.github.io/camila_agencia.github.io/") 
          
            },300) 
            setTimeout( () => {
                // console.log(validacion)
                validacion = 0  
                elemento.removeAttribute("href")
                } ,7000)
        } 
        else if (elemento == tag_a[1]){
            setTimeout(()=>{
                elemento.setAttribute("href","https://martinvolpini.github.io/bbdd_mysql.github.io/") 
                // console.log("01")
            },300)
            setTimeout( () => {
                // console.log(validacion)
                validacion = 0  
                elemento.removeAttribute("href")
                } ,7000)
        } 
        else if (elemento == tag_a[2]){
            setTimeout(()=>{
                elemento.setAttribute("href","https://martinvolpini.github.io/Bootstrap5.github.io/") 
                // console.log("02")
            },300)
            setTimeout( () => {
                // console.log(validacion)
                validacion = 0  
                elemento.removeAttribute("href")
                } ,7000)
        }  
        else if (elemento == tag_a[3]){
            setTimeout(()=>{
                elemento.setAttribute("href","https://martinvolpini.github.io/calculadora.github.io/") 
            },300)
            setTimeout( () => {
                // console.log(validacion , "")
                validacion = 0  
                elemento.removeAttribute("href")
                } ,7000)
        }  
        
        
    })
    
 })

//  let see = tag_a.getAttribute("href");  see = tag_a.removeAttribute("href");  
//  console.log(see)

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

    if(_message.value.length > 1 && _nombre.value.length > 1 && _email.value.length > 1){
        let peticion  = await fetch(`http://localhost:4200/email`, options)  /* http://portfoliogithubio.up.railway.app/email  */
        let resultado = await peticion.json()
      
    } else { alert("No llenaste el formulario") }
  
}

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    sendForm();

    let _nombre = document.getElementById("name"); let _email = document.getElementById("email");
    let _message = document.getElementById("message");

    // console.log("btn alcanzado");

    setTimeout(()=>{  _nombre.value=""; _email.value= ""; _message.value=""; },500) 
    
})
