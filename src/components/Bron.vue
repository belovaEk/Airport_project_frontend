<template>
  <h1 class="pass">▷ Данные пассажира</h1>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Фамилия" :rules="[{ required: true, message: 'Введите фамилию' }]">
      <a-input v-model:value="formState.surname" />
    </a-form-item>
    <a-form-item label="Имя" :rules="[{ required: true, message: 'Введите имя' }]">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Отчество" :rules="[{ required: true, message: 'Отчество' }]">
      <a-input v-model:value="formState.patronymic" />
    </a-form-item>
    <a-form-item label="Пол" :rules="[{ required: true, message: 'Укажите пол' }]">
      <a-radio-group v-model:value="formState.gender">
        <a-radio value="М">Муж</a-radio>
        <a-radio value="Ж">Жен</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Дата рождения" :rules="[{ required: true, message: 'Укажите дату рождения' }]">
        <a-input  class="input_number"  v-model:value="formState.birthDate"/>          
    </a-form-item>
    <a-form-item label="Номер паспорта" :rules="[{ required: true, message: 'Введите номер паспорта' }]">
      <a-input  class="input_number"  v-model:value="formState.passport" />
    </a-form-item>
    <a-form-item label="Номер телефона" :rules="[{ required: true, message: 'Введите номер телефона' }]">
      <a-input  class="input_number"  v-model:value="formState.phoneNumber" />
    </a-form-item>
    <h1 class="pass">▷ Данные рейса</h1>
    <a-form-item label="Номер рейса" :rules="[{ required: true, message: 'Введите номер рейса' }]">
      <a-input v-model:value="formState.flightNumber" />
    </a-form-item>
    <!-- <a-form-item label="Обед">
      <a-switch v-model:checked="formState.isMeal" />
    </a-form-item> -->

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Забронировать</a-button>
      <a-button @click="reset" style="margin-left: 10px">Отменить</a-button>
    </a-form-item>
  </a-form>
  <ModalBron />
</template>
<script setup>
import { reactive } from 'vue';
import ModalBron from './ModalBron.vue';

const formState = reactive({
  surname: '',
  name: '',
  patronymic: '',
  gender: '',
  passport: '',
  flightNumber: '',
  birthDate: '',
  phoneNumber: '',  
});

import { modalBronStore } from '@/store/modalBronStore';

const onSubmit = () => {
  console.log('submit!', formState);
  modalBronStore.isActive = true;
  reset()
};

const reset = () => {
  formState.surname = ''
  formState.name = ''
  formState.patronymic = ''
  formState.gender = ''
  formState.passport = ''
  formState.flightNumber =  ''
  formState.birthDate = ''
  formState.phoneNumber = ''
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

<style>
.pass{
  font-size: 20px;
  margin: 20px;
  color: rgb(18, 18, 57);
}

.input_number{
  width: 150px;
}


</style>