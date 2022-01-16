function mousemove(e) {
    document.querySelectorAll('.move').forEach((i) => {
        var mv = i.getAttribute("data-value");
        var x = (e.clientX * mv) / 200;
        var y = (e.clientY * mv) / 50;
        i.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};
function validation() {
    let x = document.forms['signup']['name'].value;
    let y = `Your name: ${x}`
    alert(y)

}
document.addEventListener('mousemove', mousemove);
