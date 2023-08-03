
//Alerta para cuando inicia sesión correctamente
const bienvenidoLoginAlert = () => {
    Swal.fire({
        title: '¿Como jugar?',
        imageUrl: './img/Instructions.png',
        width: '50%',
        position: 'center',
        title: 'Enter your IP address',
        input: 'text',
        timer: 5000,
        imageWidth: 1000,
        imageHeight: 300,
        imageAlt: 'Custom image',
        showConfirmButton: false,

        customClass: {
            container: '',
            popup: 'alert',
        }
    })
}




