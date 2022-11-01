let btnLogin = document.querySelector('#login');
let Passowrd = document.querySelector('#password');
let fname = document.querySelector('#name');
let show = document.querySelector('#showError');
let Tname = document.querySelector('#Tname');
let Tpass = document.querySelector('#Tpass')

btnLogin.addEventListener('click', function(){
    let textname = fname.value;
    let textPassword = Passowrd.value;

    alert('ລົງເຂົ້າສູ່ລະບົບແລ້ວ')
   Tname.innerText = textname
    Tpass.innerText = textPassword
})