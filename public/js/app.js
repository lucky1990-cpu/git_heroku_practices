const socket = io()



function mySignInFunction(e){
   // e.preventDefault()
  const userid = document.querySelector("#login-userid").value
  const password =  document.querySelector("#login-password").value
  console.log('success')
  socket.emit('signIn',{userid,password},(data)=>{
   console.log(data)
   if(data.length<1){
    alert('Email id is not exisit. please create new account using signup')
    document.querySelector("#login-userid").value=''
    document.querySelector("#login-password").value=''
    return

   }
   
   window.location.href='/user.html'
  })

}