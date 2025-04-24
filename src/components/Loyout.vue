<template>
    <a-layout style="min-height: 100vh">

      <SideBar/>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>{{ buttonSwitherStore.tab }}</a-breadcrumb-item>
          </a-breadcrumb>

          <Schedule v-if="buttonSwitherStore.ScheduleIsActive"/>
          <Booking v-if="buttonSwitherStore.BookingIsActive"/>
          <Refund v-if="buttonSwitherStore.RefundIsActive" />
          <SearchTicket v-if="buttonSwitherStore.SearchTicketIsActive"/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>

<script setup>
import SideBar from './SideBar.vue';
import Schedule from './Schedule.vue';
import Booking from './Booking.vue';
import Refund from './Refund.vue';
import SearchTicket from './SearchTicket.vue';

import { buttonSwitherStore } from '@/store/buttonSwither';
</script>
  <style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }

 
  </style>