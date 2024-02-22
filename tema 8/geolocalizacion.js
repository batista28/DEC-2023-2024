// geolocalizacion.js

const geo = {
  // Función para solicitar permisos de geolocalización al usuario
  solicitarPermisos: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        // Consultar el estado de los permisos de geolocalización
        navigator.permissions.query({ name: "geolocation" }).then(function (result) {
          if (result.state === "granted") {
            resolve("Permisos de geolocalización concedidos.");
          } else if (result.state === "prompt") {
            resolve("Esperando la respuesta del usuario.");
          } else {
            reject("Permisos de geolocalización denegados.");
          }
        });
      } else {
        reject("Geolocalización no compatible en este navegador.");
      }
    });
  },

  // Función para obtener la longitud actual del usuario
  obtenerLongitud: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        // Obtener la posición actual del usuario
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve(position.coords.longitude);
          },
          function (error) {
            reject("Error al obtener la longitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no compatible en este navegador.");
      }
    });
  },

  // Función para obtener la latitud actual del usuario
  obtenerLatitud: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        // Obtener la posición actual del usuario
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve(position.coords.latitude);
          },
          function (error) {
            reject("Error al obtener la latitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no compatible en este navegador.");
      }
    });
  },

  // Función para obtener la altitud actual del usuario
  obtenerAltitud: function () {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        // Obtener la posición actual del usuario
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve(position.coords.altitude);
          },
          function (error) {
            reject("Error al obtener la altitud: " + error.message);
          }
        );
      } else {
        reject("Geolocalización no compatible en este navegador.");
      }
    });
  },
};

export default geo;
