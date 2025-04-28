// Función que devuelve una promesa que se resuelve después de 2 segundos
function esperarDosSegundos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(" 2 segundos despues");
      }, 2000);
    });
  }
  
  // Función asincrónica que usa await
  async function ejecutaroperacion() {
    const mensaje = await esperarDosSegundos();
    console.log(mensaje);
    console.log("operacion terminada");
  }

  ejecutaroperacion();