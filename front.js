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


let mq_1088 = matchMedia( "(max-width:1088px)" );
let mq_590 = matchMedia( "(max-width:590px)" );
let mq_280 = matchMedia( "(max-width:280px)" );

let proyectos = document.querySelectorAll(".proyectos--items") ;
let py_title = document.querySelectorAll( ".py--items--titulo") ;
let py_text = document.querySelectorAll( ".py--items--text" ) ;
let py_link = document.querySelectorAll( ".py--items--link" ) ;

let eventTouch = false;
let eventClick = false;


proyectos.forEach((pry , i)=>{

    pry.addEventListener("touchstart",(e)=>{
        e.preventDefault();
  
        eventTouch = true;
      
        if( eventTouch ){

            if( mq_280.matches ){ 
                if( i == 0 ){ pry.classList.toggle("proyectos-active-280-0"); } 
                else if( i == 1 ){ pry.classList.toggle("proyectos-active-280-1"); }
                else if( i == 2 ){ pry.classList.toggle("proyectos-active-280-2"); }
                else { pry.classList.toggle("proyectos-active-280-3"); }
                
                py_title[i].classList.toggle("py-active-title-280")
                py_text[i].classList.toggle("py-active-text-280") 
                py_link[i].classList.toggle( "py-active-link-280" ) 
         
                console.log(e.target , "touch 280")
             }
            else if( mq_590.matches ){ 
                if( i == 0){   pry.classList.toggle("proyectos-active-590-0"); }
                else if( i == 1){   pry.classList.toggle("proyectos-active-590-1"); }
                else if( i == 2){   pry.classList.toggle("proyectos-active-590-2"); }
                else { pry.classList.toggle("proyectos-active-590-3"); }
    
                py_title[i].classList.toggle("py-active-title-590")
                py_text[i].classList.toggle("py-active-text-590") 
                py_link[i].classList.toggle( "py-active-link-590" ) 
    
                console.log(e.target , "touch 590")
            }
            else if( mq_1088.matches ){ 
                if( i == 0 ){ pry.classList.toggle("proyectos-active-1088-0"); }
                else if( i == 1 ){ pry.classList.toggle("proyectos-active-1088-1"); }
                else if( i == 2 ){ pry.classList.toggle("proyectos-active-1088-2"); }
                else { pry.classList.toggle("proyectos-active-1088-3"); }
    
                py_title[i].classList.toggle("py-active-titulo")
                py_text[i].classList.toggle("py-active-text") 
                py_link[i].classList.toggle( "py-active-link" ) 
    
                console.log(e.target , "touch 1088")
            }
            else if( !mq_1088.matches ){
                if ( i == 0) {  pry.classList.toggle("proyectos-active-0") }
                else if ( i == 1) {  pry.classList.toggle("proyectos-active-1") }
                else if ( i == 2) {  pry.classList.toggle("proyectos-active-2") }
                else{  pry.classList.toggle("proyectos-active-3") }
    
                py_title[i].classList.toggle("py-active-titulo")
                py_text[i].classList.toggle("py-active-text") 
                py_link[i].classList.toggle( "py-active-link" ) 
                // pry.classList.toggle("proyectos-active");
                console.log(e.target , "touch ACTIVE")
        
            }
       
        }
        eventTouch = false;

        
    })


})

proyectos.forEach((pry , i)=>{

    pry.addEventListener("mouseenter", (e) => {
        // Cambiar estilos u realizar acciones cuando el cursor entra en el elemento
       e.preventDefault();

           if( mq_280.matches ){ 
               if( i == 0 ){ pry.classList.toggle("proyectos-active-280-0"); } 
               else if( i == 1 ){ pry.classList.toggle("proyectos-active-280-1"); }
               else if( i == 2 ){ pry.classList.toggle("proyectos-active-280-2"); }
               else { pry.classList.toggle("proyectos-active-280-3"); }
               
               py_title[i].classList.toggle("py-active-title-280")
               py_text[i].classList.toggle("py-active-text-280") 
               py_link[i].classList.toggle( "py-active-link-280" ) 
       
               console.log(e.target , "CLICK 280")
           }
           else if( mq_590.matches ){ 
               if( i == 0){   pry.classList.toggle("proyectos-active-590-0"); }
               else if( i == 1){   pry.classList.toggle("proyectos-active-590-1"); }
               else if( i == 2){   pry.classList.toggle("proyectos-active-590-2"); }
               else { pry.classList.toggle("proyectos-active-590-3"); }

               py_title[i].classList.toggle("py-active-title-590")
               py_text[i].classList.toggle("py-active-text-590") 
               py_link[i].classList.toggle( "py-active-link-590" ) 

               console.log(e.target , "CLICK 590")
           }
           else if( mq_1088.matches ){ 
               if( i == 0 ){ pry.classList.toggle("proyectos-active-1088-0"); }
               else if( i == 1 ){ pry.classList.toggle("proyectos-active-1088-1"); }
               else if( i == 2 ){ pry.classList.toggle("proyectos-active-1088-2"); }
               else { pry.classList.toggle("proyectos-active-1088-3"); }

               py_title[i].classList.toggle("py-active-titulo")
               py_text[i].classList.toggle("py-active-text") 
               py_link[i].classList.toggle( "py-active-link" ) 

               console.log(e.target , "CLICK 1088")
           }
           else if( !mq_1088.matches ){
               if ( i == 0) {  pry.classList.toggle("proyectos-active-0") }
               else if ( i == 1) {  pry.classList.toggle("proyectos-active-1") }
               else if ( i == 2) {  pry.classList.toggle("proyectos-active-2") }
               else{  pry.classList.toggle("proyectos-active-3") }

               py_title[i].classList.toggle("py-active-titulo")
               py_text[i].classList.toggle("py-active-text") 
               py_link[i].classList.toggle( "py-active-link" ) 

               console.log(e.target , "CLICK ACTIVE")
       
           }
 
   })

   pry.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    // Cambiar estilos u realizar acciones cuando el cursor sale del elemento
        if( mq_280.matches ){ 
            if( i == 0 ){ pry.classList.toggle("proyectos-active-280-0"); } 
            else if( i == 1 ){ pry.classList.toggle("proyectos-active-280-1"); }
            else if( i == 2 ){ pry.classList.toggle("proyectos-active-280-2"); }
            else { pry.classList.toggle("proyectos-active-280-3"); }
            
            py_title[i].classList.toggle("py-active-title-280")
            py_text[i].classList.toggle("py-active-text-280") 
            py_link[i].classList.toggle( "py-active-link-280" ) 


        }
        else if( mq_590.matches ){ 
            if( i == 0){   pry.classList.toggle("proyectos-active-590-0"); }
            else if( i == 1){   pry.classList.toggle("proyectos-active-590-1"); }
            else if( i == 2){   pry.classList.toggle("proyectos-active-590-2"); }
            else { pry.classList.toggle("proyectos-active-590-3"); }

            py_title[i].classList.toggle("py-active-title-590")
            py_text[i].classList.toggle("py-active-text-590") 
            py_link[i].classList.toggle( "py-active-link-590" ) 

        }
        else if( mq_1088.matches ){ 
            if( i == 0 ){ pry.classList.toggle("proyectos-active-1088-0"); }
            else if( i == 1 ){ pry.classList.toggle("proyectos-active-1088-1"); }
            else if( i == 2 ){ pry.classList.toggle("proyectos-active-1088-2"); }
            else { pry.classList.toggle("proyectos-active-1088-3"); }

            py_title[i].classList.toggle("py-active-titulo")
            py_text[i].classList.toggle("py-active-text") 
            py_link[i].classList.toggle( "py-active-link" ) 

        }
        else if( !mq_1088.matches ){
            if ( i == 0) {  pry.classList.toggle("proyectos-active-0") }
            else if ( i == 1) {  pry.classList.toggle("proyectos-active-1") }
            else if ( i == 2) {  pry.classList.toggle("proyectos-active-2") }
            else{  pry.classList.toggle("proyectos-active-3") }

            py_title[i].classList.toggle("py-active-titulo")
            py_text[i].classList.toggle("py-active-text") 
            py_link[i].classList.toggle( "py-active-link" ) 

        }

  });


    //  pry.addEventListener("click",(e)=>{
    //     e.preventDefault();

    //         if( mq_280.matches ){ 
    //             if( i == 0 ){ pry.classList.toggle("proyectos-active-280-0"); } 
    //             else if( i == 1 ){ pry.classList.toggle("proyectos-active-280-1"); }
    //             else if( i == 2 ){ pry.classList.toggle("proyectos-active-280-2"); }
    //             else { pry.classList.toggle("proyectos-active-280-3"); }
                
    //             py_title[i].classList.toggle("py-active-title-280")
    //             py_text[i].classList.toggle("py-active-text-280") 
    //             py_link[i].classList.toggle( "py-active-link-280" ) 
        
    //             console.log(e.target , "CLICK 280")
    //         }
    //         else if( mq_590.matches ){ 
    //             if( i == 0){   pry.classList.toggle("proyectos-active-590-0"); }
    //             else if( i == 1){   pry.classList.toggle("proyectos-active-590-1"); }
    //             else if( i == 2){   pry.classList.toggle("proyectos-active-590-2"); }
    //             else { pry.classList.toggle("proyectos-active-590-3"); }

    //             py_title[i].classList.toggle("py-active-title-590")
    //             py_text[i].classList.toggle("py-active-text-590") 
    //             py_link[i].classList.toggle( "py-active-link-590" ) 

    //             console.log(e.target , "CLICK 590")
    //         }
    //         else if( mq_1088.matches ){ 
    //             if( i == 0 ){ pry.classList.toggle("proyectos-active-1088-0"); }
    //             else if( i == 1 ){ pry.classList.toggle("proyectos-active-1088-1"); }
    //             else if( i == 2 ){ pry.classList.toggle("proyectos-active-1088-2"); }
    //             else { pry.classList.toggle("proyectos-active-1088-3"); }

    //             py_title[i].classList.toggle("py-active-titulo")
    //             py_text[i].classList.toggle("py-active-text") 
    //             py_link[i].classList.toggle( "py-active-link" ) 

    //             console.log(e.target , "CLICK 1088")
    //         }
    //         else if( !mq_1088.matches ){
    //             if ( i == 0) {  pry.classList.toggle("proyectos-active-0") }
    //             else if ( i == 1) {  pry.classList.toggle("proyectos-active-1") }
    //             else if ( i == 2) {  pry.classList.toggle("proyectos-active-2") }
    //             else{  pry.classList.toggle("proyectos-active-3") }

    //             py_title[i].classList.toggle("py-active-titulo")
    //             py_text[i].classList.toggle("py-active-text") 
    //             py_link[i].classList.toggle( "py-active-link" ) 

    //             console.log(e.target , "CLICK ACTIVE")
        
    //         }

    // })

})

//*Aumentos : estaria bueno limpiar las class para que no se produscan errores con varios eventos q hacen lo mismo en la vista. 

/*--------------------------------------------------------------------------------- */


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
