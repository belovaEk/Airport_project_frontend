<template>
  <div :style="{ padding: '24px', background: '#fff',}" class="header">
            <div class="search_container">
              <div>
                <input class="search_input" type="text" placeholder="Паспорт"  v-model="passengerData.passport"> 
              </div>              
              <button class="search_shedlule" @click="searchFlights()">Поиск</button>
            </div>
  </div>
  <div class="table_container">
    <TableTicket/>
  </div>

</template>

<script setup>
import TableTicket from './TableTicket.vue';
import { fetchGet } from '@/subFuncs';
import { ticketStore } from '@/store/scheduleStore/searchTicketStore';

const passengerData = {
  passport: '',
}

async function searchFlights(){

  const response = await fetchGet(`bookings/${passengerData.passport}`)

    ticketStore.dataTable = response.map(item => ({
      departure_airport: item.departure_airport,
      arrival_airport: item.arrival_airport,
      departure_date: item.departure_date,
      seat: item.seat,
      booking_id: item.booking_id,
  }));
}
  

</script>

<style>
.header{
  border-radius: 5px;
}

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