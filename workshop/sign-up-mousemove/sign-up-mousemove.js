document.addEventListener('mousemove', x);
function x(e) {
    document.querySelectorAll('.planet').forEach((i) => {
        var mv = i.getAttribute("data-value");
        var x = (e.clientX * mv) / 100;
        var y = (e.clientY * mv) / 100;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
let a = document.querySelectorAll('.planet');
let b = 50;
for (let i in a) {
    a[i].style.marginTop = `${b}px`;
    b *= Math.random() * 2;
};
