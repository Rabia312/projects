var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
var close = document.querySelector('.close')

function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modal.offsetHeight;
    modal.style.marginTop = -height / 2 + "px";
    modal.style.top = "50%";
}

close.onclick = function() {
    modal.style.top = "-100%";
    overflow.remove();
}
