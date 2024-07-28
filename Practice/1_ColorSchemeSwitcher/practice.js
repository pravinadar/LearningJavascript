const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')



buttons.forEach((e)=>{  // use {}
    console.log(e)
    e.addEventListener('click',(ee)=>{
        console.log(ee)
        console.log(ee.target)
        console.log(ee.target.id)
        body.style.backgroundColor=ee.target.id
        
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        //   }
    })

    
})