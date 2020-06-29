const agujaSegundos = document.querySelector('.segundos');
const agujaMinutos = document.querySelector('.minutos');
const agujaHoras = document.querySelector('.horas');

console.log(agujaSegundos)

function setDate() {
    const horaActual = new Date();
    const segundos = horaActual.getSeconds();
    const segundosEnGrados = ((segundos / 60) * 360) + 90;
    agujaSegundos.style.transform = `rotate(${segundosEnGrados}deg)`;
    
    const minutos = horaActual.getMinutes();
    const minutosEnGrados = ((minutos / 60) * 360) + 90;
    agujaMinutos.style.transform = `rotate(${minutosEnGrados}deg)`;

    const horas = horaActual.getHours();
    const horasEnGrados = ((horas / 12) * 360) + 90;
    agujaHoras.style.transform = `rotate(${horasEnGrados}deg)`;
}


setInterval(setDate, 1000)