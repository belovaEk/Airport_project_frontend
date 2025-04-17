<template>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'departure_time'">
          <span>
            <smile-outlined />
            Время вылета
          </span>
        </template>
      </template>
  
      <template #bodyCell="{ column, record }">
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
        <template v-else-if="column.key === 'price'">
          <span>
            {{ record.price }} руб.
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
      departure_time: 'departure_time',
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
      title: 'Кол-во свободных мест',
      dataIndex: 'number_of_seats',
      key: 'number_of_seats',
    },
    
    {
      title: 'Стоимость полета',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Номер рейса',
      key: 'flight_id',
    },
  ];

  import { scheduleStore } from '@/store/scheduleStore/scheduleStore';
import { computed, watch } from 'vue';

const data = computed(()=> scheduleStore.dataTable)

  </script>