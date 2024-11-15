const loginLink = document.querySelector('.box>.signup>.form2>.loginLink>a')
const signupLink = document.querySelector('.box>.login>.form1>.signupLink>a')
const box2 = document.querySelector('.box>.box2')
const userS = document.getElementById('userS')
const email = document.getElementById('email')
const passS = document.getElementById('passS')
const btn2 = document.querySelector('.box>.signup>.form2>.btn2')
const spanS = document.querySelectorAll('.Inp2>span')
const p = document.querySelector('.box>.signup>.form2>.Inp2>p')
const userL= document.getElementById('userL')
const passL= document.getElementById('passL')
const btn1 = document.querySelector('.box>.login>.form1>.btn1')
const spanL = document.querySelectorAll('.Inp1>span')
const lock = document.querySelector('.box>.login>.form1>.Inp1>.lock')


let tempUS=''
let tempE=''
let tempPS=''
let tempUL=''
let tempPL=''
/////////////////////////////////////////
loginLink.addEventListener('click',(e)=>{
    e.preventDefault()
    box2.style.left='560px'
})
signupLink.addEventListener('click',(e)=>{
    e.preventDefault()
    box2.style.left='-10px'
})
//////////sign up///////
/////username input ////
userS.addEventListener('input',()=>{

    tempUS = userS.value
    if(tempUS=='' ||
        tempUS==null||
        tempUS.search(/<script/)>=0||
        tempUS.search(/^[a-z0-9_-]{3,15}$/)==-1
    ){
        spanS[0].innerHTML =`
        please enter username correctly!
        ` 
    }else{
        spanS[0].innerHTML =''
    }
})
///////email input ////
email.addEventListener('input',()=>{

    tempE = email.value
    if(tempE=='' ||
        tempE==null||
        tempE.search(/<script/)>=0||
        tempE.search(/@/)<=2 ||
        tempE.length<10 ||
        (tempE.search(/@/))+4 > tempE.search(/[.]/)
    ){
        spanS[1].innerHTML =`
        please enter your Email correctly!
        ` 
    }else{
        spanS[1].innerHTML =''
    }
})
///////password input///
passS.addEventListener('input',()=>{
    tempPS = passS.value
    let flag = 0
    if(
        tempPS=='' ||
        tempPS==null ||
        tempPS.search(/<script/)>=0 ||
        tempPS.search(/[0-9]/)==-1 ||
        tempPS.search(/[a-z]/)==-1 ||
        tempPS.search(/[A-Z]/)==-1 ||
        tempPS.search(/[!@#$%^&*_-]/)==-1 ||
        tempPS.length<8
    ){
        spanS[2].innerHTML =`
        please enter your Password correctly!
        ` 
    }else{
        spanS[2].innerHTML=''
    }

    tempPS.search(/[0-9]/)>=0 && flag++
    tempPS.search(/[a-z]/)>=0 && flag++
    tempPS.search(/[A-Z]/)>=0 && flag++
    tempPS.search(/[!@#$%^&*_-]/)>=0 && flag++
    tempPS.length>=8 && flag++

   
    switch(flag){
        case 0 :p.innerHTML=''; p.style.color= 'black' ; break;
        case 1 :p.innerHTML='very weak !' ; p.style.color= 'red' ; break;
        case 2 :p.innerHTML='weak !' ; p.style.color= 'orange' ; break;
        case 3 :p.innerHTML='normal !' ; p.style.color= 'rgb(239, 239, 104)' ; break;
        case 4 :p.innerHTML='good !' ; p.style.color= 'green' ; break;
        case 5 :p.innerHTML='strong !' ; p.style.color= 'blue' ; break;

    }

})
////btn2 click check ////
btn2.addEventListener('click',(e)=>{

    tempUS = userS.value
    if(tempUS=='' ||
        tempUS==null||
        tempUS.search(/<script/)>=0||
        tempUS.search(/^[a-z0-9_-]{3,15}$/)==-1
    ){
        spanS[0].innerHTML =`
        please enter username correctly!
        ` 
        e.preventDefault()

    }else{
        spanS[0].innerHTML =''
    }


    //////////////////
    tempE = email.value
    if(tempE=='' ||
        tempE==null||
        tempE.search(/<script/)>=0||
        tempE.search(/@/)<=2 ||
        tempE.length<10 ||
        (tempE.search(/@/))+4 > tempE.search(/[.]/)
    ){
        spanS[1].innerHTML =`
        please enter your Email correctly!
        ` 
        e.preventDefault()
    }else{
        spanS[1].innerHTML =''
    }


    /////////

    tempPS = passS.value
    let flag = 0
    if(
        tempPS=='' ||
        tempPS==null ||
        tempPS.search(/<script/)>=0 ||
        tempPS.search(/[0-9]/)==-1 ||
        tempPS.search(/[a-z]/)==-1 ||
        tempPS.search(/[A-Z]/)==-1 ||
        tempPS.search(/[!@#$%^&*_-]/)==-1 ||
        tempPS.length<8
    ){
        spanS[2].innerHTML =`
        please enter your Password correctly!
        ` 
        e.preventDefault()
    }else{
        spanS[2].innerHTML=''
    }
})
///////log in ///////
/////username input ////
userL.addEventListener('input',()=>{

    tempUL = userL.value
    if(tempUL=='' ||
        tempUL==null||
        tempUL.search(/<script/)>=0||
        tempUL.search(/^[a-z0-9_-]{3,15}$/)==-1
    ){
        spanL[0].innerHTML =`
        please enter username correctly!
        ` 
    }else{
        spanL[0].innerHTML =''
    }
})
/////password input///
passL.addEventListener('input',()=>{
    tempPL = passL.value
    if(
        tempPL=='' ||
        tempPL==null ||
        tempPL.search(/<script/)>=0 ||
        tempPL.search(/[0-9]/)==-1 ||
        tempPL.search(/[a-z]/)==-1 ||
        tempPL.search(/[A-Z]/)==-1 ||
        tempPL.search(/[!@#$%^&*_-]/)==-1 ||
        tempPL.length<8
    ){
        spanL[1].innerHTML =`
        please enter your Password correctly!
        ` 
    }else{
        spanL[1].innerHTML=''
    }
})

////lock///
let f = 1
lock.addEventListener('click',()=>{
    if(f%2){
        lock.children[0].style.opacity = '0'
        lock.children[1].style.opacity = '1'
        passL.setAttribute('type','password')
    }else{
        lock.children[0].style.opacity = '1'
        lock.children[1].style.opacity = '0'
        passL.setAttribute('type','text')
    }f++
})
////////btn1 click check////
btn1.addEventListener('click',(e)=>{

    tempUL = userL.value
    if(tempUL=='' ||
        tempUL==null||
        tempUL.search(/<script/)>=0||
        tempUL.search(/^[a-z0-9_-]{3,15}$/)==-1
    ){
        spanL[0].innerHTML =`
        please enter username correctly!
        ` 
        e.preventDefault()

    }else{
        spanL[0].innerHTML =''
    }


    //////////////////
   

    tempPL = passL.value
    if(
        tempPL=='' ||
        tempPL==null ||
        tempPL.search(/<script/)>=0 ||
        tempPL.search(/[0-9]/)==-1 ||
        tempPL.search(/[a-z]/)==-1 ||
        tempPL.search(/[A-Z]/)==-1 ||
        tempPL.search(/[!@#$%^&*_-]/)==-1 ||
        tempPL.length<8
    ){
        spanL[1].innerHTML =`
        please enter your Password correctly!
        ` 
        e.preventDefault()
    }else{
        spanL[1].innerHTML=''
    }
})