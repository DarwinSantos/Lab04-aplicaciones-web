function validar(){

    // para los nombres
    var names=document.forms['formulario']['names'].value;
    
    if(names==""){
        document.getElementById("errorName").innerHTML="Complete este campo";
        return false;
    }else{
        document.getElementById("errorName").innerHTML="";
    }
    
    // para el correo
    var correo=document.forms['formulario']['email'].value;
    atpos = correo.indexOf("@");
    dotpos = correo.lastIndexOf(".");
    if(correo==""){
        document.getElementById("errorEmail").innerHTML="Complete este campo";
       
        return false;
    }else if (atpos < 1 || ( dotpos - atpos < 2 )) {
        // document.myForm.EMail.focus() ;
        document.getElementById("errorEmail").innerHTML="Ingrese un email válido";
        return false;
     }else{
        document.getElementById("errorEmail").innerHTML="";
    }

    
     //para el telefono
     const phone=document.formulario.phone.value;
     if(phone==""){
        document.getElementById("errorPhone").innerHTML="Complete este campo";
        return false;
    }else if(phone.length !==9){
        document.getElementById("errorPhone").innerHTML="ingrese un teléfono válido";
        return false;
    }

    //para el date
    let date=document.formulario.date.value;
    const date_format=new Date(date);
    const date__now=new Date();

    if(date__now.getFullYear()-date_format.getFullYear()>120){
        document.getElementById("errorDate").innerHTML="ingrese una fecha válida";
        return false;
    }

    //para el texto
    const texto=document.formulario.mensaje.value;
    if(texto.length<150){
        document.getElementById("errorText").innerHTML="texto muy corto";
        return false;
    }
     return true;
}