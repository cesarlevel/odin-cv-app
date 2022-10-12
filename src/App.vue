<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import General from './components/General.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Preview from './components/Preview.vue';
import { ref, reactive, provide } from 'vue';

const state = reactive({
  general: {
    name: 'Cesar Level',
    email: 'cesar.level@gmail.com',
    phoneNumber: '123-123-123'
  },
  education: [],
  experience: [],
});

provide('state', state);
</script>

<template>
{{state}}
  <General />
  <Experience />
  <Education />
  <Preview />
</template>

<style scoped>

</style>
