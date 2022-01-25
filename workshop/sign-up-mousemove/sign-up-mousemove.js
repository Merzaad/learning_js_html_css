// mousemove
function mousemove(e) {
    const move = document.querySelectorAll('.move')
    move.forEach((i) => {
        const mv = i.getAttribute("data-value");
        const x = (e.clientX * mv) / 50;
        const y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
};
// validation
function Validation(event) {
    const name = document.forms['signup'][`name`];
    const lastname = document.forms['signup'][`lastname`];
    const ready = document.forms['signup'][`ready`];
    const code = document.forms['signup'][`code`];
    const letters = /^[A-Za-z]+$/;
    function isChar(...a) {
        let x = [false,'nothing'] // {is:false , errIn:'nothing'}
        a.forEach((i) => i.style = `border-color:darkgreen`);
        for (let i of a) {
            if (i.value.match(letters)) {
                x[0] = true;
            }
            else {
                x[0] = false;
                x[1] = i.getAttribute('name')
                i.style = "border-color:darkred"
                break;
            };
        }
        return x
    };
    if (isChar(name, lastname)[0]) {
        alert(`Name: ${name.value} , Lastname: ${lastname.value} ,  Ready value: ${ready.value}, Select value: ${code.value}`);
    }
    else {
        event.preventDefault();
        alert(`error in ${isChar(name, lastname)[1]}`);
    }
};
document.addEventListener('mousemove', mousemove);
document.forms['signup'].addEventListener('submit', Validation);

