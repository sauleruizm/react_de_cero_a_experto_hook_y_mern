
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad:'New York',
    zip: 3333,
    lat: 12.333,
    lng: 34.555
  }
};



// const persona2 = persona; //evitar las asignaciones de referencia

const persona2 = {...persona};
persona2.nombre ='Peter';
console.table(persona);
console.log(persona2);