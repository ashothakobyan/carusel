const slide = document.querySelectorAll(".slide")
const next = document.getElementById("btn-next")
const prev = document.getElementById("btn-prev")
const dot = document.querySelectorAll(".dot")
const span = document.getElementById("span")
let img = document.getElementById("im")
let index = 0
console.log(img.src)
function nextslide(i){
    for(s of slide){
        s.classList.remove("activ")
    }
    slide[i].classList.add("activ")
}
function nextdot(i){
    for(d of dot){
        d.classList.remove("activ")
    }
    dot[i].classList.add("activ")
}
next.addEventListener("click",function(){
    if(int !== false){
        clearInterval(int)
    }
    if(slide.length-1 === index){
        index = -1
    }
    index++
    nextslide(index)
    nextdot(index)
    if(int !== false){
        int = setInterval(function(){
            if(index === slide.length -1){
                index = -1
            }
            index++
            nextslide(index)
            nextdot(index)
        },2500)
    }
})
prev.addEventListener("click",function(){
    if(int !== false){
        clearInterval(int)
    }
    if(0 === index){
        index = slide.length
    }
    index--
    nextslide(index)
    nextdot(index)
    if(int !== false){
        int = setInterval(function(){
            if(index === slide.length -1){
                index = -1
            }
            index++
            nextslide(index)
            nextdot(index)
        },2500)
    }
})
dot.forEach(function(d,i){
    d.addEventListener("click",function(){
        if(int !== false){
            clearInterval(int)
        }
        index = i
        nextslide(index)
        nextdot(index)
        if(int !== false){
            int = setInterval(function(){
                if(index === slide.length -1){
                    index = -1
                }
                index++
                nextslide(index)
                nextdot(index)
            },2500)
        }

    })
})
let int = setInterval(function(){
    if(index === slide.length -1){
        index = -1
    }
    index++
    nextslide(index)
    nextdot(index)
},2500)

span.addEventListener("click",function(){
    if(int === false){
        img.src = "stop.png"
        int = setInterval(function(){
            if(index === slide.length -1){
                index = -1
            }
            index++
            nextslide(index)
            nextdot(index)
        },2500)
    }else{
        img.src = "play.png"
        clearTimeout(int)
        int = false
        
    }
})
