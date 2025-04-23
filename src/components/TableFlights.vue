<template>
    <a-table :columns="columns" :data-source="data">
     
  
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'departure_airport'">
          <span>
            {{ record.departure_airport }}
          </span>
        </template>
        <template v-if="column.key === 'arrival_airport'">
          <span>
            {{ record.arrival_airport }}
          </span>
        </template>
        <template v-if="column.key === 'departure_date'">
          <span>
            {{ record.departure_date}}
          </span>
        </template>
        <template v-if="column.key === 'arrival_date'">
          <span>
            {{ record.arrival_date}}
          </span>
        </template>
        <template v-if="column.key === 'arrival_time'">
          <span>
            {{ record.arrival_time }}
          </span>
        </template>
        <template v-if="column.key === 'departure_time'">
          <span>
            {{ record.departure_time }}
          </span>
        </template>
        <template v-if="column.key === 'ship_type'">
          <span>
            {{ record.ship_type }}
          </span>
        </template>
        <template v-else-if="column.key === 'number_of_seats'">
          <span>
            {{ record.number_of_seats }}
          </span>
        </template>
        <template v-else-if="column.key === 'flight_id'">
          <a>
            {{ record.flight_id }}
          </a>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
  const columns = [
  {
      title: 'Откуда',
      dataIndex: 'departure_airport',
      key: 'departure_airport',
    },
    {
      title: 'Куда',
      dataIndex: 'arrival_airport',
      key: 'arrival_airport',
    },
    {
      title: 'Дата вылета',
      dataIndex: 'departure_date',
      key: 'departure_date',
    },
    {
      title: 'Дата прибытия',
      dataIndex: 'arrival_date',
      key: 'arrival_date',
    },
    {
      title: 'Время вылета',
      dataIndex: 'departure_time',
      key: 'departure_time',
    },
    {
      title: 'Время прибытия',
      dataIndex: 'arrival_time',
      key: 'arrival_time',
    },
    {
      title: 'Вид транспорта',
      dataIndex: 'ship_type',
      key: 'ship_type',
    },
    {
      title: 'Кол-во мест',
      dataIndex: 'number_of_seats',
      key: 'number_of_seats',
    },
    {
      title: 'Номер рейса',
      key: 'flight_id',
    },
  ];

  import { scheduleStore } from '@/store/scheduleStore/scheduleStore';
  import { computed, } from 'vue';

const data = computed(()=> scheduleStore.dataTable)

  </script>