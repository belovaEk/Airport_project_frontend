<template>
  <h1 class="pass">▷ Данные пассажира</h1>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Фамилия">
      <a-input v-model:value="formState.surname" />
    </a-form-item>
    <a-form-item label="Имя">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Отчество">
      <a-input v-model:value="formState.patronymic" />
    </a-form-item>
    <a-form-item label="Пол">
      <a-radio-group v-model:value="formState.gender">
        <a-radio value="М">Муж</a-radio>
        <a-radio value="Ж">Жен</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Дата рождения">
      <a-date-picker v-model:value="formState.birthDate" />
    </a-form-item>
    <a-form-item label="Номер паспорта">
      <a-input v-model:value="formState.passport" />
    </a-form-item>
    <h1 class="pass">▷ Данные рейса</h1>
    <a-form-item label="Номер рейса">
      <a-input v-model:value="formState.flightNumber" />
    </a-form-item>
    <a-form-item label="Обед">
      <a-switch v-model:checked="formState.isMeal" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Забронировать</a-button>
      <a-button @click="reset" style="margin-left: 10px">Отменить</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive, toRaw } from 'vue';
const formState = reactive({
  surname: '',
  name: '',
  patronymic: '',
  gender: '',
  passport: '',
  flightNumber: '',
  birthDate: '',
  isMeal: false,
});
const onSubmit = () => {
  console.log('submit!', toRaw(formState), formState.birthDate);
  reset()
};

const reset = () => {
  formState.surname = ''
  formState.name = ''
  formState.patronymic = ''
  formState.gender = ''
  formState.passport = ''
  formState.flightNumber=  ''
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
  margin: 25px;
  color: rgb(18, 18, 57);
}
</style>