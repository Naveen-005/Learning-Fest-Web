function check(){

    var name=document.getElementById("name").value
    var phn=document.getElementById("phn").value
    var mail=document.getElementById("mail").value
    var inst=document.getElementById("inst").value
    let valid=true
    let msg

    if(name.length<1){
        valid=false
        msg="Name is required"
    }
    else if(phn.length<10){
        valid=false
        msg="Enter a valid phone number"
    }
    else if(mail.length<1){
        valid=false
        msg="Mail ID is required"
    }
    else if(inst.length<1){
        valid=false
        msg="Institution name is required"
    }
    else{
        msg="Successfully Registered"
    }

    const card=document.getElementById("card")
    const body=document.getElementById("msg")
    body.innerHTML=msg
    card.style.display="block"
    
    
    if (valid===false) {
        body.style.backgroundColor="#FF6969"
    }
    else{
        body.style.backgroundColor="#A6CF98"
    }
    
}