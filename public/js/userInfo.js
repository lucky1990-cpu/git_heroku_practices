const socket = io();
const _id = localStorage.getItem("ID");
//document.querySelector("._id").value= _id
document.querySelector("#_id").value= _id

socket.emit('SearchByID',_id,(data)=>{
    console.log(data)
    _fnBindingData(data)

})

function _fnBindingData(data){
    //document.querySelector(".IUserNameHeader").innerHTML=data[0].name
    document.getElementById('IUserName').innerHTML=data[0].name
    
    
    document.getElementById('IjoiningDate').innerHTML=data[0].joiningDate
    document.getElementById('iNameInp').value=data[0].name
    document.getElementById('iFatherNameInp').value=data[0].FatherName
    document.getElementById('iPhoneInp').value=data[0].Mobile
    document.querySelector('.mobNo').innerHTML=data[0].Mobile

    document.getElementById('iEmailIdInp').value=data[0].Email
    document.getElementById('iPaidDateInp').value=data[0].PaidDate
    document.getElementById('iRenewalDateInp').value=data[0].RenewalDate
    document.getElementById('iAddressInp').value=data[0].Address
    document.getElementById('iAadharInp').value=data[0].AadharNumber
    

}

function onUpdateUserInfo(){
    const oUserUpdate = {
        _id: document.getElementById('_id').value,
        joiningDate: document.getElementById('IjoiningDate').value,
        name:document.getElementById('iNameInp').value.toUpperCase(),
        FatherName:document.getElementById('iFatherNameInp').value.toUpperCase(),
        Mobile:document.getElementById('iPhoneInp').value,
        Email:document.getElementById('iEmailIdInp').value.toUpperCase(),
        PaidDate:document.getElementById('iPaidDateInp').value,
        RenewalDate:document.getElementById('iRenewalDateInp').value,
        Address:document.getElementById('iAddressInp').value,
        AadharNumber:document.getElementById('iAadharInp').value
    }

    socket.emit('UserUpdate', oUserUpdate,(data)=>{
    if(data){
        alert('User updated successfully')
        window.location.href='/UserInfo.html'

    }

    })

}
document.querySelector("#navBackUsers").addEventListener('click',(e)=>{
  e.defaultPrevented
  window.location.href = '/user.html'
})