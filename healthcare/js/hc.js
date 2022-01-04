function purchase() {
    let a = "Purchased";
    document.getElementById("purch").innerHTML = a;

    let b = document.querySelectorAll('#badge')
    b.forEach(function (value) {
        value.style.display = 'none'
    });
    document.querySelector('#crd').classList.add('border-success')
    document.querySelector('#crd').classList.add('text-success')
    document.querySelector('#crdh').classList.replace('text-secondary', 'text-success')  
}

function newsletter() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name == "" || email == "") {
        alert("Subscribe to our newsletter!")
    }
    else {
        alert("Subscribed")
    }
    

}
