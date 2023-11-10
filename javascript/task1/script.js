function roll(){
    var num=Math.floor(Math.random() * 6) + 1;
    console.log(num)
    document.getElementById("dice").innerHTML=num
}