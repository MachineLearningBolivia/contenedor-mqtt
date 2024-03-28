<template>
  <div class="py-12 px-20 md:px-20 lg:px-56 space-y-10">
    <div class="flex flex-col text-4xl font-bold space-y-2 text-white items-center justify-center">
      <h1>Visualizador de Datos de Sensor</h1>
      <h2 class="text-lg">Usted está viendo los datos del contenedor 1</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
      <div v-for="sensor in sensores" class="flex items-center justify-center">
        <CardContainer  :name-section="sensor.nameSensor"
                        :data-section="sensor.dataSensor"
                        :icon-name="sensor.nameIcon"
                        :text-info="sensor.info"
        />
      </div>
    </div>
  </div>
</template>
<script setup>

import CardContainer from "../components/component-data/cardDatacontainer.vue";
import mqtt from "mqtt";
import {ref} from 'vue'

const mqttClient = mqtt.connect("wss://6eb8ab6cce1449c0a26f6cf84c47cdc2.s1.eu.hivemq.cloud:8884/mqtt",
    {username: 'machine', password: 'Learning1'})

function cadenaToJson(cadena) {
  // Eliminar los caracteres "{" y "}" del principio y del final de la cadena
  cadena = cadena.replace(/^\{|\}$/g, '');

  // Dividir la cadena en pares "key: valor" separados por coma
  let pares = cadena.split(',');

  // Objeto JSON donde se guardarán las keys y los valores
  let resultado = {};

  // Recorrer los pares "key: valor" y agregarlos al objeto JSON
  for (let par of pares) {
    // Separar cada par en key y valor usando el ":" como separador
    let partes = par.split(':');
    let key = partes[0].trim(); // Eliminar espacios al principio y al final de la key
    let valor = partes[1].trim(); // Eliminar espacios al principio y al final del valor

    // Si el valor es numérico, convertirlo a número
    if (!isNaN(valor)) {
      valor = parseFloat(valor);
    }

    // Agregar el par key: valor al objeto JSON
    resultado[key] = valor;
  }

  return resultado;
}

mqttClient.on("error", (error) => {
  console.log(error);
  mqttClient.end();
});

mqttClient.on("connect", () => {
  console.log("MQTT client has connected.");
  mqttClient.subscribe(`contenedor1`, { qos: 0 });
});

mqttClient.on("close", () => {
  "MQTT client has been disconnected. Attempting to reconnect...";
  mqttClient.reconnect();
});

mqttClient.on("message", async function (topic, message) {
  //console.log(message.toString());
  //console.log(message.toString());
  let reading = message.toString();
  reading = JSON.parse(reading);
  console.log('contenedor1 ' + reading)
  temp.value = reading.temp;
  hum.value = reading.hum;
  fire.value = reading.fire;
  vol.value = reading.vol;
  lat.value = reading.lat;
  lon.value = reading.lon;
});


let temp = ref(0)
let hum = ref(0)
let fire = ref(0)
let vol = ref(0)
let lat = ref(0)
let lon = ref(0)



const sensores = [
  {
    id:1,
    nameSensor:'Temperatura(C°)',
    dataSensor:temp,
    nameIcon:"fa-temperature-low",
    info: 'Sensor de temperatura'
  },
  {
    id:2,
    nameSensor:'Humedad(%)',
    dataSensor:hum,
    nameIcon:"wi-humidity",
    info: 'Sensor de humedad'
  },
  {
    id:3,
    nameSensor:'Sensor de fuego',
    dataSensor:fire,
    nameIcon:"fa-fire",
    info: 'Si el sensor está en 1, hay fuego.'
  },
  {
    id:4,
    nameSensor:'Volumen(%)',
    dataSensor:vol,
    nameIcon:"fa-fire",
    info: 'Sensor de volumen'
  },
  {
    id:5,
    nameSensor:'Latitud',
    dataSensor:lat,
    nameIcon:"fa-map-marker-alt",
    info: 'Coordenadas'
  },
  {
    id:6,
    nameSensor:'Longitud',
    dataSensor:lon,
    nameIcon:"fa-map-marker-alt",
    info: 'Coordenadas'
  }
]

/*export default {
  name: 'Visualizer',
  components: {CardContainer},}*/

</script>