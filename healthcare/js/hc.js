function purchase() {
    let a = "Purchased";
   
    document.getElementById("purch").innerHTML = a;
    let b = document.querySelectorAll('#badge')
    b.forEach(function (value) {
        value.style.display='none'
    })
}
