const move = document.querySelectorAll('.move')
function mousemove(e) {
    move.forEach((i) => {
        const mv = i.getAttribute("data-value");
        const x = (e.clientX * mv) / 400;
        const y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
function NaNValidation() {
    const x = document.forms['signup'][`name`].value;
    const y = document.forms['signup'][`lastname`].value;
    const letters = /^[A-Za-z]+$/;
    function checkletter(a) {
        if (a.match(letters)) {
            return true;
        }
        else {
            return false;
        };
    };
    if (checkletter(x) && checkletter(y)) {
        alert(`Name: ${x} and Lastname: ${y} are validated`);
        return true;
    }
    else {
        alert("only letters are allowed");
        return false;
    };
};
document.addEventListener('mousemove', mousemove);

