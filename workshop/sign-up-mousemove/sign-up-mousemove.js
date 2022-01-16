function mouseover(e) {
    document.querySelectorAll('.move').forEach((i) => {
        var mv = i.getAttribute("data-value");
        var x = (e.clientX * mv) / 200;
        var y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
document.addEventListener('mousemove', mouseover);