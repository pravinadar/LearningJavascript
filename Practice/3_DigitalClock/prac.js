const clock =document.getElementById('clock')

setInterval(function name(t) {
    let date =new Date()
    clock.innerHTML=date.toLocaleTimeString()
    
},1000)
// 1000 = 1sec