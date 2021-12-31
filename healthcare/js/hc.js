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

function newsletter(){
    const form = document.getElementById('nl');
    const name = form.element["name"];
    const email = form.element["email"];
    let fullName = name.value
    alert(fullName)
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}