const socket = io()
socket.emit('UsersDetails',(data)=>{
 console.log(data);
 
  _fnUserHeaderData(data)

})


const _fnUserHeaderData = ((data)=>{
  if(data){
    //let img = '<img src="../img/User_icon.png"  style ="width: 5%"/>';
      let rows=""
      data.forEach((items)=>{
        rows += "<tr><td>"+items._id+"</td><td>"+items.name+"</td><td>"+items.Mobile+"</td><td>"+items.Email+"</td><td>"+items.PaidDate+"</td><td>"+items.RenewalDate+"</td></tr>"
      })
 
      $( rows ).appendTo("#user_header_data tbody");
  }
  

})



$('#user_header_data').on('click', 'tr', (e)=>{
  let aTdDetaisl = e.currentTarget.cells;
   let aUserData = {
   ID:e.currentTarget.cells[0].innerText,
   phone:e.currentTarget.cells[1].innerText,
   Email:e.currentTarget.cells[2].innerText,
   PaidDate:e.currentTarget.cells[3].innerText,
   ReniewalDate: e.currentTarget.cells[4].innerText
} 
   _fnGetUserInfo(aUserData)
 })

 const _fnGetUserInfo= ((aUserData,callback)=>{
   if(!aUserData.ID){
     return
   }
  localStorage.setItem("ID", aUserData.ID);
    window.location.href='/UserInfo.html'
 })

function onNewJoiner(){
  window.location.href='/NewJoiner.html'
}

function onSerchByName(){
  
  const name =  document.getElementById('serchByName').value.toUpperCase();
  
  socket.emit('searchByName',name,(data)=>{
    
    $("#user_header_data tbody tr").remove();
    _fnUserHeaderData(data)

  })
}

function onSearchByPhone(){
  const phone =  document.getElementById('searchByPhone').value;
  
  socket.emit('searchByPhone',phone,(data)=>{
    
    $("#user_header_data tbody tr").remove();
    _fnUserHeaderData(data)

  })

}
function onSearchByEmail(){
  const Email =  document.getElementById('searchByEmail').value.toUpperCase();
  
  socket.emit('searchByEmail',Email,(data)=>{
    
    $("#user_header_data tbody tr").remove();
    _fnUserHeaderData(data)

  })

}

function onSearchByDate(){
  const PaidDate =  document.getElementById('searchByDate').value;
  console.log(PaidDate)
  socket.emit('searchByPaidDate',PaidDate,(data)=>{
    
    $("#user_header_data tbody tr").remove();
    _fnUserHeaderData(data)

  })
}

function onSearchByRenewalDate(){
  const RenewalDate =  document.getElementById('searchByRenewal').value;
  socket.emit('searchByRenewalDate',RenewalDate,(data)=>{
    $("#user_header_data tbody tr").remove();
    _fnUserHeaderData(data)

  })
}
