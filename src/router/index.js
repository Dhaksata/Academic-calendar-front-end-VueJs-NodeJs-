import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AcademicCalendar from '../views/AcademicCalendar.vue';
import AboutBit from '../views/AboutBit.vue';
import SpecialLab from '../views/SpecialLab.vue';
import MonthButton from '../views/MonthButton.vue';
import SelectYear from '../views/SelectYear.vue';
import EventsBit from '@/views/EventsBit.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/academic',
    name: 'academic',
    component: AcademicCalendar
  },
  {
    path: '/aboutbit',
    name: 'aboutbit',
    component: AboutBit
  },
  {
    path: '/special',
    name: 'speciallab',
    component: SpecialLab
  },
  {
    path: '/months',
    name: 'monthbutton',
    component: MonthButton
  },
  {
    path: '/select',
    name: 'selectyear',
    component: SelectYear
  },
  {
    path: '/events',
    name: 'eventsbit',
    component: EventsBit
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
