const socket = io()

function onSubmitNewJoiner(){
    
    const userObj = {
        name: document.getElementById('JoinerName').value.toUpperCase(),
        Mobile:document.getElementById('JoinerPhone').value,
        Email:document.getElementById('JoinerEmail').value.toUpperCase(),
        joiningDate:document.getElementById('JoinerJoiningDate').value,
        PaidDate:document.getElementById('JoinerPaidDate').value,
        RenewalDate:document.getElementById('JoinerRenewalDate').value,
        Address:document.getElementById('JoinerAddress').value,
        AadharNumber:document.getElementById('JoinerAadharCard').value
       //Photo:document.getElementById('JoinerPhoto')
    }
    if(!userObj.name && !userObj.Mobile && !userObj.Email && !userObj.joiningDate && !userObj.PaidDate && !userObj.RenewalDate && !userObj.Address){
      alert('All field is mandatory Please fill all field')
      return
    }

    document.querySelector('#newJoinerformSubmit').disabled=true
socket.emit('NewJoiner',userObj,(data)=>{
    if(data){
        console.log(data)
        alert('User Create successfully')
        document.querySelector('#newJoinerformSubmit').disabled=false
        _fnClearform()
    }
})
    
}
function _fnClearform(){
    document.getElementById('JoinerName').value=''
    document.getElementById('JoinerPhone').value=''
    document.getElementById('JoinerEmail').value=''
    document.getElementById('JoinerJoiningDate').value=''
    document.getElementById('JoinerPaidDate').value=''
    document.getElementById('JoinerRenewalDate').value=''
    document.getElementById('JoinerAddress').value=''
    document.getElementById('JoinerAadharCard').value=''
}

document.querySelector("#navBackNewJoiner").addEventListener('click',(e)=>{
    e.defaultPrevented
    window.location.href='/user.html'

})