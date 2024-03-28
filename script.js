// script JS

function submitform(){
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let wht = document.getElementById("wht-input").value;
    
}

document.getElementById('send-button').addEventListener('click', () => {
    return submitform();
});