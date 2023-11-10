function emi(){
    var p=parseFloat(document.getElementById("p").value)
    var r=parseFloat(document.getElementById("r").value)
    var n=parseFloat(document.getElementById("n").value)
    r=(r/12)/100
    n=n*12
    var emi=(p*r*((1+r)**n))/(((1+r)**n)-1)
    document.getElementById("emi").innerHTML="EMI = ₹"+emi.toFixed(2)
}