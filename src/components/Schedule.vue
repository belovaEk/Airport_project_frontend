<template>
  <div :style="{ padding: '24px', background: '#fff', }">
            <div class="search_container">
              <div>
                <input class="search_input" type="text" placeholder="Откуда"  v-model="fliteDirections.cityDeparture"> 
              </div>
              <div>
                <input class="search_input" type="text" placeholder="Куда" v-model="fliteDirections.cityArrival"> 
              </div>
              <div>
                <input class="search_input" type="date" placeholder="Когда"  v-model="fliteDirections.date"> 
              </div>
              
              <button class="search_shedlule" @click="searchFlights()">Поиск</button>
            </div>
  </div>
  <div class="table_container">
    <TableFlights/>
  </div>

</template>

<script setup>
import TableFlights from './TableFlights.vue';
import { fetchGet } from '@/subFuncs';
import { scheduleStore } from '@/store/scheduleStore/scheduleStore';

const fliteDirections = {
  cityDeparture: '',
  cityArrival: '',
  date: '',
}

async function searchFlights(){

  const response = await fetchGet(`search_flights?departure_airport=${fliteDirections.cityDeparture}&arrival_airport=${fliteDirections.cityArrival}&departure_date=${fliteDirections.date}`)

   scheduleStore.dataTable = response.map(item => ({
    departure_airport: item.departure_airport,
    arrival_airport: item.arrival_airport,
    departure_date: item.departure_date,
    arrival_date: item.arrival_date,
      departure_time: item.departure_time,
      arrival_time: item.arrival_time,
      ship_type: item.ship_type,
      number_of_seats: item.number_of_seats,
      flight_id: item.flight_id,
  }));
}
  

</script>

<style>

.table_container{
  margin-top: 25px;
}
 .search_container{
    background-color: rgb(231, 231, 231);
    width: 100%;
    height: 90px;
    align-items: center;
    padding: 0 16px;
    display: flex;
    border-radius: 5px;
    gap: 40px;
  }

  .search_input{
    width: 200px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
  }

  .search_shedlule{
    width: 200px;
    height: 49px;
    background-color: #3e5a7e;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
  }
</style>