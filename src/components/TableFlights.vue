<template>
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'departureTime'">
          <span>
            <smile-outlined />
            Время вылета
          </span>
        </template>
      </template>
  
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'departureTime'">
          <span>
            {{ record.departureTime }}
          </span>
        </template>
        <template v-if="column.key === 'typeShip'">
          <span>
            {{ record.typeShip }}
          </span>
        </template>
        <template v-else-if="column.key === 'numberSeats'">
          <span>
            {{ record.numberSeats }}
          </span>
        </template>
        <template v-else-if="column.key === 'cost'">
          <span>
            {{ record.cost }} руб.
          </span>
        </template>
        <template v-else-if="column.key === 'flightNumber'">
          <a>
            {{ record.flightNumber }}
          </a>
        </template>
      </template>
    </a-table>
  </template>
  <script setup>
  const columns = [
    {
      departureTime: 'departureTime',
      dataIndex: 'departureTime',
      key: 'departureTime',
    },
    {
      title: 'Время прибытия',
      dataIndex: 'arrivalTime',
      key: 'arrivalTime',
    },
    {
      title: 'Вид транспорта',
      dataIndex: 'typeShip',
      key: 'typeShip',
    },
    {
      title: 'Кол-во свободных мест',
      dataIndex: 'numberSeats',
      key: 'numberSeats',
    },
    
    {
      title: 'Стоимость полета',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Номер рейса',
      key: 'flightNumber',
    },
  ];
  const data = [
    {
      key: '1',
      departureTime: '12:00',
      arrivalTime: '15:00',
      typeShip: 'самолет',
      numberSeats: '20',
      cost: 12,
      flightNumber: "12003"
    },
    {
      key: '2',
      departureTime: '12:00',
      arrivalTime: '15:00',
      typeShip: 'самолет',
      numberSeats: '20',
      cost: 12,
      flightNumber: "12003"
    },
    {
      key: '3',
      departureTime: '12:00',
      arrivalTime: '15:00',
      typeShip: 'самолет',
      numberSeats: '20',
      cost: 12,
      flightNumber: "12003"
    },
  ];

  </script>