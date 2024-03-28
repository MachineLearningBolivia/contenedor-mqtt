<template>
  <div class="py-12 px-20 md:px-20 lg:px-56 space-y-10">
    <div class="flex flex-col text-4xl font-bold space-y-2 text-white items-center justify-center">
      <h1>Visualizador de Datos de Sensor</h1>
      <h2 class="text-lg">Usted está viendo los datos del contenedor 3</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
      <div v-for="sensor in sensores" class="flex items-center justify-center">
        <CardContainer  :name-section="sensor.nameSensor"
                        :data-section="sensor.dataSensor"
                        :icon-name="sensor.nameIcon"
        />
      </div>
    </div>
  </div>
</template>
<script setup>

import CardContainer from "../components/component-data/cardDatacontainer.vue";
import mqtt from "mqtt";
import {ref} from 'vue'

let datosRecibidos = ref({})
const mqttClient = mqtt.connect("wss://6eb8ab6cce1449c0a26f6cf84c47cdc2.s1.eu.hivemq.cloud:8884/mqtt",
    {username: 'machine', password: 'Learning1'})


mqttClient.on("error", (error) => {
  console.log(error);
  mqttClient.end();
});

mqttClient.on("connect", () => {
  console.log("MQTT client has connected.");
  mqttClient.subscribe(`contenedor3`, { qos: 0 });
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
  console.log('contenedor3' + reading)
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
  },
  {
    id:2,
    nameSensor:'Humedad(%)',
    dataSensor:hum,
    nameIcon:"wi-humidity"
  },
  {
    id:3,
    nameSensor:'Sensor de fuego',
    dataSensor:fire,
    nameIcon:"fa-fire"
  },
  {
    id:4,
    nameSensor:'Volumen(%)',
    dataSensor:vol,
    nameIcon:"fa-fire"
  },
  {
    id:5,
    nameSensor:'Latitud',
    dataSensor:lat,
    nameIcon:"fa-map-marker-alt"
  },
  {
    id:6,
    nameSensor:'Longitud',
    dataSensor:lon,
    nameIcon:"fa-map-marker-alt"
  }
]

/*export default {
  name: 'Visualizer',
  components: {CardContainer},}*/

</script>