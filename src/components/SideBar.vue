<template>
<a-layout-sider>
        <div class="logo">
          <img src="/src/assets/air-company-logo.png" alt="" width="60px" height="40px">
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1" @click="buttonSwitherStore.ScheduleSwitch()">
            <pie-chart-outlined />
            <span>Расписание полетов</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>Билеты</span>
              </span>
            </template>
            <a-menu-item key="3" @click="buttonSwitherStore.BronSwitch()">Бронирование</a-menu-item>
            <!-- <a-menu-item key="4">Продажа</a-menu-item> -->
            <!-- <a-menu-item key="5">Изменение</a-menu-item> -->
            <a-menu-item key="6" @click="buttonSwitherStore.RefundSwitch()">Возврат</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Справка</span>
              </span>
            </template>
            <a-menu-item key="8">Правила перевозки</a-menu-item>
            <a-menu-item key="10">Частые вопросы</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>  
</template>

<script setup>
import { ref } from 'vue';

import { buttonSwitherStore } from '@/assets/Store/buttonSwither';


const selectedKeys = ref(['1']);
</script>

<style>
.logo{
  padding-left: 65px;
}
</style>