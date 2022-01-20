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
// validation
function Validation(event) {
    const name = document.forms['signup'][`name`];
    const lastname = document.forms['signup'][`lastname`];
    const ready = document.forms['signup'][`ready`];
    const code = document.forms['signup'][`code`];
    const letters = /^[A-Za-z]+$/;
    function isChar(...a) {
        let is = false
        a.forEach((i) => i.style = `border-color:darkgreen`)
        for (let i of a) {
            if (i.value.match(letters)) {
                is = true;
            }
            else {
                i.style = `border-color:darkred`;
                is = false;
                break;
            };
        }
        return is;
    };
    if (isChar(name, lastname)) {
        alert(`Name: ${name.value} , Lastname: ${lastname.value} ,  Ready value: ${ready.value}, Select value: ${code.value}`);
    }
    else {
        event.preventDefault();
        alert("error")
    }
  
};

document.addEventListener('mousemove', mousemove);
document.forms['signup'].addEventListener('submit', Validation);

