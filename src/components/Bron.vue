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
      <a-input class="input_number" v-model:value="formState.flightNumber" />
      <a-button class="btn_check_seats" type="primary" @click="checkSeats(formState.flightNumber)">Проверить</a-button>
    </a-form-item>
    <a-form-item  label="Выбор места">
      <a-select
      v-model:value="formState.seatNumber"
      show-search
      placeholder="Выбор места"
      style="width: 200px"
      :options="options"
      :filter-option="filterOption"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
  </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit()">Забронировать</a-button>
      <a-button @click="reset" style="margin-left: 10px">Отменить</a-button>
    </a-form-item>
  </a-form>
  <ModalBron :bron-id="bookingId" />
</template>
<script setup>
import { reactive, ref } from 'vue';
import ModalBron from './ModalBron.vue';
const options = ref([
  {
    value: 'мест нет',
  },
  {
    value: 'F1'
  },
  {
    value: 'j1',
  },
]);

const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const formState = reactive({
  surname: '',
  name: '',
  patronymic: '',
  gender: '',
  passport: '',
  flightNumber: '',
  birthDate: '',
  phoneNumber: '',  
  seatNumber: '',
});

import { modalBronStore } from '@/store/modalBronStore';
import { fetchPost } from '@/subFuncs';
// import { fetchGet } from '@/subFuncs';
 
const bookingId = ref(0)
async function onSubmit() {
  modalBronStore.isActive = true;
 
  try {
    const response = await fetchPost('booking', {
      first_name: formState.name,
      last_name: formState.surname,
      middle_name: formState.patronymic,
      birth_date: formState.birthDate,
      gender: formState.gender,
      passport: formState.passport,
      phone_number: formState.phoneNumber,
      flight_id: formState.flightNumber,
      seat: 'F1'
    });
    
    const data = await response.json();
    bookingId.value = data.booking_id;
    reset(); 
  } catch (error) {
    console.error('Error:', error);
  }
}

const checkSeats = (flightNumber) => {
  // fetch запрос на доступные билеты
}
const reset = () => {
  formState.surname = ''
  formState.name = ''
  formState.patronymic = ''
  formState.gender = ''
  formState.passport = ''
  formState.flightNumber =  ''
  formState.birthDate = ''
  formState.phoneNumber = ''
  formState.seatNumber = ''
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
.btn_check_seats{
  margin-left: 10px;
}

.pass{
  font-size: 20px;
  margin: 20px;
  color: rgb(18, 18, 57);
}

.input_number{
  width: 150px;
}


</style>