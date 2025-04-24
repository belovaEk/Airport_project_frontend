import SearchTicket from '@/components/SearchTicket.vue';
import { reactive } from 'vue'


export const buttonSwitherStore = reactive({
  tab: 'Расписание',
  ScheduleIsActive: true,
  BookingIsActive: false,
  RefundIsActive: false,
  SearchTicketIsActive: false,

  ScheduleSwitch() {
    this.ScheduleIsActive = true;
    this.BookingIsActive = false;
    this.RefundIsActive = false;

    this.tab = 'Расписание';
  },
  
  BookingSwitch() {
    this.BookingIsActive = true;
    this.ScheduleIsActive = false;
    this.RefundIsActive = false; 
    
    this.tab = 'Бронирование';
  },

  RefundSwitch() {
    this.RefundIsActive = true;
    this.BookingIsActive = false;
    this.ScheduleIsActive = false;
     
    this.tab = 'Возврат';
  },

  SearchTicketSwitch() {
    this.SearchTicketIsActive = true;
    this.RefundIsActive = false;
    this.BookingIsActive = false;
    this.ScheduleIsActive = false;
     
    this.tab = 'Поиск билетов';
  },
})

