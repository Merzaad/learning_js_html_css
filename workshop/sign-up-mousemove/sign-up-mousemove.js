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
    function isLet(a) {
        let x = { is: false, errIn: 'nothing' };
        if (a.value.match(letters)) {
            x.does = true;
            a.style = `border-color:darkgreen`
        }
        else {
            x.errIn = `must be letters`
            a.style = "border-color:darkred";
        };
        return x
    };
    const isLetName = isLet(name);
    const isLetLastname = isLet(lastname);
    if (isLet.is && isLet.is) {
        alert(`Name: ${name.value} , Lastname: ${lastname.value} ,  Ready value: ${ready.value}, Select value: ${code.value}`);
    }
    else {
        event.preventDefault();
        alert(`name error: ${isLetName.errIn} ----- lastname error: ${isLetName.errIn}`);
    }
};
document.addEventListener('mousemove', mousemove);
document.forms['signup'].addEventListener('submit', Validation);

