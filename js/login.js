function Login () {
    let User = document.querySelector('#name');
    let pass = document.querySelector('#password');

        if (User.value === '') {
            Swal.fire({
                icon: 'error',
                title: 'ກະລຸນາປ້ອນ ຊື່',
                confirmButtonText: 'ຕົກລົງ'
            })
        }else if (pass.value === ''){
            Swal.fire({
                icon: 'error',
                title: 'ກະລຸນາປ້ອນ ລະຫັດຜ່ານ',
                confirmButtonText: 'ຕົກລົງ'
            })
        }else {
            Swal.fire({
                icon: 'success',
                title: 'ເຂົ້າສູ່ລະບົບແລ້ວ',
                confirmButtonText: 'ຕົກລົງ'
            })
        }
}

let btn = document.querySelector('#login').addEventListener('click', () => {
    Login()
})

let Showpass = document.querySelector('#showPass');

Showpass.addEventListener('click', () => {
    let pass = document.querySelector('#password')
    console.log(pass)
    if (pass.type == 'text'){
        pass.setAttribute('type', 'password')
    } else if (pass.type == 'password'){
        pass.setAttribute('type', 'text')
    }
})