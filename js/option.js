

let btnPin = document.querySelector('#pin');
let SuBmit = document.querySelector('#submit')

function checkOption (Val1,Val2,Val3) {
    if (Val1 === Val3) {
        Val2.classList.remove('d-none');
        Val2.classList.add('jay');
    } else {
        Val2.classList.add('d-none');
    }
    Val2.classList.add('form-control')
}

function checkform (){
    let fname = document.querySelector('#name').value;
    let lname = document.querySelector('#lname').value;
    let Tel = document.querySelector('#Tel').value;
    let Pin = document.querySelector('#pin').value;
    let Go = document.querySelector('#bous').value;
    let ditl = document.querySelector('#ditl').value;
   
    if (fname === ''){
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນຊື້',
            confirmButtonText: 'ຕົກລົງ',
           
          })
    } else if (lname === ''){
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນນາມສະກຸນ',
            confirmButtonText: 'ຕົກລົງ',
        })
    } else if (Tel === '') {
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນເບີໂທ',
            confirmButtonText: 'ຕົກລົງ',
        })
    } else if (Pin === ''){
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນແຂວງ',
            confirmButtonText: 'ຕົກລົງ'
        })
    }  else if (Go === '') {
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນບໍລິສັດຈັດສົ່ງ',
            confirmButtonText: 'ຕົກລົງ'
        })
    } else if (ditl === '') {
        Swal.fire({
            icon: 'error',
            title: 'ກະລຸນາປ້ອນບ້ານ',
            confirmButtonText: 'ຕົກລົງ'
        })
    } else {
        let jay = document.querySelector('.jay').value
        Swal.fire({
            icon: 'success',
            title: 'ກຳລັງຈັດສົ່ງໃຫ້ທ່ານ',
            text: `ຊື່:​${fname} ນາມສະກຸນ: ${lname} ເບີໂທ: ${Tel} ບ້ານ:${ditl} ເມືອງ:${jay} ແຂວງ:​${Pin} ບໍລິສັດຂົນສົ່ງ: ${Go}`,
            confirmButtonText: 'ຕົກລົງ'
        })
    }
        
}



function SelectVal() {
    let optionVal = document.querySelector('#pin').value;
   

    
        checkOption(optionVal,Vientiane,'ແຂວງວຽງຈັນ');
        checkOption(optionVal,Xayabuli,'ແຂວງໄຊຍະບູລີ');
        checkOption(optionVal,Capital,'ນະຄອນຫຼວງ');
        checkOption(optionVal,Khammuan, 'ແຂວງຄຳມວ່ນ')
        checkOption(optionVal,Champasak, 'ແຂວງຈຳປະສັກ')
        checkOption(optionVal,Xiengkhuang, 'ແຂວງຊຽງຂວາງ')
        checkOption(optionVal,XaiSambon, 'ແຂວງໄຊສົມບູນ')
        checkOption(optionVal,Sekong, 'ແຂວງເຊກອງ')
        checkOption(optionVal, Borikhamxay, 'ແຂວງບໍໍລິຄຳໄຊ')
        checkOption(optionVal, Bokeo, 'ແຂວງບໍ່ແກ້ວ')
        checkOption(optionVal, Phongsaly, 'ແຂວງຜົ້ງສາລີ')
        checkOption(optionVal, Sarawan, 'ແຂວງສາລະວັນ')
        checkOption(optionVal, Savanakhet, 'ແຂວງສະຫວັດນະເຂດ')
        checkOption(optionVal, LuangNamtha, 'ແຂວງຫຼວງນ້ຳທາ')
        checkOption(optionVal, LuangPrabang, 'ແຂວງຫຼວງພະບາງ')
        checkOption(optionVal, Huaphan, 'ແຂວງຫົວພັນ')
        checkOption(optionVal, Attapu, 'ແຂວງອັດຕະປຶ')
        checkOption(optionVal, Oudomxay, 'ແຂວງອຸດົມໄຊ')

    let CutyHide = document.querySelector('#CutyHide');
    CutyHide.classList.add('d-none')
}

btnPin.addEventListener('change', SelectVal);
SuBmit.addEventListener('click', checkform)
