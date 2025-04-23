<template>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Номер брони">
        <a-input v-model:value="formState.bookingNumber" />
      </a-form-item>
      <a-form-item label="Причина">
      <a-select v-model:value="formState.reason">
        <a-select-option value="demo">Нашел другое предложение (другая компания)</a-select-option>
        <a-select-option value="demo">Нашел другое предложение (наша комапания)</a-select-option>
        <a-select-option value="demo">Кончились деньги</a-select-option>
      </a-select>
    </a-form-item>
      <a-form-item label="Комментарии">
        <a-textarea v-model:value="formState.comment" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Возврат</a-button>
        <a-button style="margin-left: 10px" @click="reset">Отмена</a-button>
      </a-form-item>
    </a-form>
  </template>
  <script setup>
  import { reactive, toRaw } from 'vue';
  const formState = reactive({
    bookingNumber: '',
    comment: '',
    reason: '',
  });
  const onSubmit = () => {
    console.log('submit!', toRaw(formState));
    reset()
  };

  const reset = () => {
    formState.bookingNumber = '';
    formState.comment = '';
    formState.reason = '';
  }
  const labelCol = {
    style: {
      width: '150px',
    },
  };
  const wrapperCol = {
    span: 14,
  };
  </script>