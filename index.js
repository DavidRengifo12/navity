const canvas = document.getElementById("snowcanvas")
const ctx = canvas.getContext("2d")

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

resizeCanvas()
window.addEventListener("resize", resizeCanvas)

const snowflakes = []
const SNOWFLAKE_COUNT = 120

function createSnowlakes(){
    snowflakes.length = 0

    for(let i = 0; i< SNOWFLAKE_COUNT; i++){
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speedY: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.7,
            opacity: Math.random() * 0.5 + 0.5
        })
    }
}
createSnowlakes()

function drawSnow() {
    ctx.clearRect (0,0, canvas.width, canvas.height)

    ctx.fillStyle = 'white'
    ctx.beginPath()

    for(let flake of snowflakes){
        ctx.globalAlpha = flake.opacity
        ctx.moveTo(flake.x, flake.y)
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI *0.25)

        flake.y += flake.speedY
        flake.x += flake.speedX

        if(flake.y > canvas.height + flake.radius) {
            flake.y = -flake.radius
            flake.x = Math.random() *canvas.width
        }

         if(flake.x > canvas.width + flake.radius) {
            flake.x = -flake.radius
        }else if(flake.x < -flake.radius){
            flake.x = canvas.width + flake.radius
        }
    }

    ctx.fill()
    ctx.globalAlpha = 1
}

function animate(){
    drawSnow()
    requestAnimationFrame(animate)

}
animate()