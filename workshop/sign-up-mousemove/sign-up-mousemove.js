// mousemove
function mousemove(e) {
    const move = document.querySelectorAll('.move')
    move.forEach((i) => {
        const mv = i.getAttribute("data-value");
        const x = (e.clientX * mv) / 100;
        const y = (e.clientY * mv) / 100;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
document.addEventListener('mousemove', mousemove);
// validation
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
