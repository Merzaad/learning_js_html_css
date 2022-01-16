let move = document.querySelectorAll('.move')



function mousemove(e) {
    move.forEach((i) => {
        var mv = i.getAttribute("data-value");
        var x = (e.clientX * mv) / 400;
        var y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};

function validation() {
    let x = document.forms['signup']['name'].value;
    let y = `Validated`;
    alert(y);
    return true
};


document.addEventListener('mousemove', mousemove);

