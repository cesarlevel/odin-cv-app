<script setup>
import Input from './Input.vue';
import { ref, inject } from 'vue'
const test = ref(null);
const state = inject('state');
</script>

<template>
    {{test}}
    <h2>General</h2>
    <Input label="Full name" v-model="state.general.name"/>
    <Input label="Current role" v-model="state.general.role"/>
    <Input label="About me" type="textarea" v-model="state.general.aboutMe"/>
    <Input label="Email" type="email" v-model="state.general.email"/>
    <Input label="Phone" type="tel" v-model="state.general.phoneNumber"/>
</template>

<style scoped>
</style>
