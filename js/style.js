
let marks=document.querySelector('input')
let button=document.querySelector('button')
let results= document.querySelector('h2')

button.addEventListener('click',function(){

    if(marks.value==""){
        results.innerHTML= "Please Enter Your Marks!"
        results.style.color="blue"
    }
    else if(marks.value<0 || marks.value>100){
        results.innerHTML= "Please Input 0 to 100"
        results.style.color="green"
    }
    else if(marks.value>=80 & marks.value<=100){
        results.innerHTML= "Your Grade is: A+"
        results.style.color="green"
    }
    else if(marks.value>=70){
        results.innerHTML= "Your Grade is: A"
        results.style.color="green"
    }
    else if(marks.value>=60){
        results.innerHTML= "Your Grade is: A-"
        results.style.color="green"
    }
    else if(marks.value>=50){
        results.innerHTML= "Your Grade is: B"
        results.style.color="green"
    }
    else if(marks.value>=40){
        results.innerHTML= "Your Grade is: C"
        results.style.color="green"
    }
    else if(marks.value>=33){
        results.innerHTML= "Your Grade is: D"
        results.style.color="green"
    }
    else{
        results.innerHTML= "Your Grade is: F"
        results.style.color="red"
    }
})
