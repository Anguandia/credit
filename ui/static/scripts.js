var signup = document.getElementById('signup');
var main = document.getElementById('main');
var children = main.children;
function sign(){
    var selected = document.getElementById('signup-form');
    alert(children.length);
    for(var child of children){
        if(child.getAttribute('class')=='signup'){
            child.style.display = 'block';
        } else {
            child.style.display = 'none';
        }
    }
}

signup.onclick = sign;
