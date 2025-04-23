<template>
    <div>
      <a-modal v-model:open="open" title="Номер брони:" @ok="handleOk">
        <span>{{ props.bookingId }}</span>
      </a-modal>
    </div>
  </template>
  <script setup>
  import { computed } from 'vue';
  import { modalBookingStore } from '@/store/modalBookingStore';
  const open = computed(()=> modalBookingStore.isActive);

  const props = defineProps({
    bookingId: Number,
  })
  const handleOk = e => {
    modalBookingStore.isActive = false;
  };
  </script>