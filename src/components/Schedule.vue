<template>
  <div :style="{ padding: '24px', background: '#fff', }">
            <div class="search_container">
              <div>
                <input class="search_input" type="text" placeholder="Откуда"> 
              </div>
              <div>
                <input class="search_input" type="text" placeholder="Куда"> 
              </div>
              <div>
                <input class="search_input" type="date" placeholder="Когда"> 
              </div>
              <!-- <div>
                <select class="search_input" type="number" placeholder="Кол-во пассажиров">
                  <option value="">Пассажир</option>
                  <option value="">Взрослые</option>
                  <option value="">Дети</option>
                  </select> 
              </div> -->
              <button class="search_shedlule">Поиск</button>
            </div>
  </div>
  <div class="table_container">
    <TableFlights/>
  </div>

</template>

<script setup>
import TableFlights from './TableFlights.vue';
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