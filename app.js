const canvas = document.getElementById("JScanvas")



const onMouse = (event) => {

    console.log(event)

}

if(canvas){
    canvas.addEventListener("mousemove",onMouse)
}