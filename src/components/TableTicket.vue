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
        <template v-else-if="column.key === 'seat'">
          <span>
            {{ record.seat }}
          </span>
        </template>
        <template v-else-if="column.key === 'booking_id'">
          <a @click="switchRefund(record.booking_id)">
            {{ record.booking_id }}
          </a>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
  import { buttonSwitherStore } from '@/store/buttonSwither';

  function switchRefund(booking_id){
    buttonSwitherStore.RefundSwitch()
    localStorage.setItem('booking_id', booking_id);
  }

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
      title: 'Место',
      dataIndex: 'seat',
      key: 'seat',
    },
    {
      title: 'Номер бронирования',
      key: 'booking_id',
    },
  ];

  import { ticketStore } from '@/store/scheduleStore/searchTicketStore';
  import { computed, } from 'vue';

const data = computed(()=> ticketStore.dataTable)

  </script>