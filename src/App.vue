<script setup>
import General from './components/General.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Preview from './components/Preview.vue';
import { ref, reactive, provide } from 'vue';

const state = reactive({
  general: {
    name: 'John Doe',
    role: 'Frontend Developer',
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices urna blandit nulla tempor, sit amet fermentum elit vulputate. Duis nibh justo, lobortis lacinia sapien eu, efficitur imperdiet ligula. Cras tortor lorem, efficitur eu sagittis quis, vestibulum in erat. Ut erat ex, sodales vitae odio sit amet, blandit pellentesque massa.',
    email: 'john.doe@mail.com',
    phoneNumber: '123-123-123'
  },
  education: [
    {
      institutionName: 'University of Doe',
      title: 'Web Developer',
      yearStart: '2002',
      yearEnd: '2008'
    },
    {
      institutionName: 'Doe Collage',
      title: 'Web Designer',
      yearStart: '2002',
      yearEnd: '2008'
    }
  ],
  experience: [
    {
      company: 'Awesome Company',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices urna blandit nulla tempor, sit amet fermentum elit vulputate.',
      yearStart: '2002',
      yearEnd: '2008'
    },
      {
      company: 'My first company',
      position: 'Web Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices urna blandit nulla tempor, sit amet fermentum elit vulputate.',
      yearStart: '2002',
      yearEnd: '2008'
    }
  ],
});

provide('state', state);
</script>

<template>
  <div class="form-container">
    <h1>CV—Builder.</h1>
    <General />
    <div class="divider"></div>
    <Experience />
    <div class="divider"></div>
    <Education />
  </div>
  <div class="preview-container">
    <Preview />
  </div>
</template>

<style scoped>
  .divider {
    width: 100%;
    height: 2px;
    background: var(--odin-cv-muted-color);
    margin: 24px 0;
  }
</style>
