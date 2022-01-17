const move = document.querySelectorAll('.move')
function mousemove(e) {
    move.forEach((i) => {
        const mv = i.getAttribute("data-value");
        const x = (e.clientX * mv) / 500;
        const y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
function Validation() {
    const x = document.forms['signup'][`name`].value;
    const y = document.forms['signup'][`lastname`].value;
    const z = document.forms['signup'][`ready`].value;
    const v = document.forms['signup'][`code`].value;
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
        alert(`Name: ${x} , Lastname: ${y} ,  Ready value: ${z}, Select value: ${v}`);
        return true;
    }
    else {
        alert("only letters are allowed");
        return false;
    };
};
document.addEventListener('mousemove', mousemove);

