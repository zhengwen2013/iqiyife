function requestLogin(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/action.login');
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status ==200){
            document.getElementById('userHead').innerHTML = this.responseText;
        }
    }
    xhr.send();
}