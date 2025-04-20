<template>
    <div>
      <a-modal v-model:open="open" title="Номер брони:" @ok="handleOk">
        <p>Some contents...</p>
      </a-modal>
    </div>
  </template>
  <script setup>
  import { computed } from 'vue';
  import { modalBronStore } from '@/store/modalBronStore';
  const open = computed(()=> modalBronStore.isActive);

  const handleOk = e => {
    modalBronStore.isActive = false;
  };
  </script>