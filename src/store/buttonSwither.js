import { reactive } from 'vue'


export const buttonSwitherStore = reactive({
  tab: 'Расписание',
  ScheduleIsActive: true,
  BronIsActive: false,
  RefundIsActive: false,

  ScheduleSwitch() {
    this.ScheduleIsActive = true;
    this.BronIsActive = false;
    this.RefundIsActive = false;

    this.tab = 'Расписание';
  },
  
  BronSwitch() {
    this.BronIsActive = true;
    this.ScheduleIsActive = false;
    this.RefundIsActive = false; 
    
    this.tab = 'Бронирование';
  },

  RefundSwitch() {
    this.RefundIsActive = true;
    this.BronIsActive = false;
    this.ScheduleIsActive = false;
     
    this.tab = 'Возврат';
  },
})

