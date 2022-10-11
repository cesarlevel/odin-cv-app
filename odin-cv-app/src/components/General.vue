<script setup>
import Input from './Input.vue';
import { ref, inject } from 'vue'
const test = ref(null);
const state = inject('state');
</script>

<template>
    {{test}}
    <p>General</p>
    <Input label="Full name" v-model="state.general.name"/>
    <Input label="Email" type="email" v-model="state.general.email"/>
    <Input label="Phone" type="tel" v-model="state.general.phoneNumber"/>
</template>

<style scoped>
</style>
