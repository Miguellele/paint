var mousevent='';
var posicaoAnteriorX,posicaoAnteriorY;
var canvas=document.getElementById('meucanvas')
var ctx=canvas.getContext('2d')
var color='black'
var tamanho=5
canvas.addEventListener('mousedown',mousepressionado)
function mousepressionado(e){
    color=document.getElementById('cor').value
    tamanho=document.getElementById('thammhanno').value
    mousevent='mouse pressionado'
}
canvas.addEventListener('mousemove',mousemovendo)
function mousemovendo(e){
  mousex=e.clientX-canvas.offsetLeft
  mousey=e.clientY-canvas.offsetTop
  if(mousevent=='mouse pressionado'){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=tamanho
    ctx.moveTo(posicaoAnteriorX,posicaoAnteriorY)
    ctx.lineTo(mousex,mousey)
    ctx.stroke()
  }
  posicaoAnteriorX=mousex
  posicaoAnteriorY=mousey    
}
canvas.addEventListener('mouseup',mouseup)
function mouseup(e){
    mousevent='mouse up'   
}
canvas.addEventListener('mouseleave',mousedentro)
function mousedentro(e){
    mousevent='mouse live'   
}
function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}