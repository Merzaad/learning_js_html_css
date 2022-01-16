function mouseover(e) {
    document.querySelectorAll('.planet').forEach((i) => {
        var mv = i.getAttribute("data-value");
        var x = (e.clientX * mv) / 100;
        var y = (e.clientY * mv) / 100;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};

document.addEventListener('mousemove', mouseover);

let a = document.querySelectorAll('.planet');

for (let i in a) {
    if (i % 2 == 0) {
        a[i].style = `
        position:absolute;
        right: ${Math.random() * 100}%;
        top:   ${Math.random() * 300}%;
        z-index: -1;
        overflow:hidden;
        width:50px;
        `;
    }
    else {
        a[i].style = `
        position:absolute;
        right: ${Math.random() * 100}%;
        bottom: ${Math.random() * 100}%;
        z-index: -1;
        overflow:hidden;
        width:50px;
        `;
    }
};


document.addEventListener('mousemove', mouseover);