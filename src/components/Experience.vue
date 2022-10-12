<script setup>
import Input from './Input.vue';
import { addStateArrayItem, deleteStateArrayItem } from '../composables/use-add-remove-array-items';
import { ExperienceItemModel } from '../models/experience-item-model';
import { inject } from 'vue'

const state = inject('state');
</script>

<template>
    <p>Experience</p>
    <ul>
        <li v-for="(item, index) in state.experience" :key="index">
            <Input label="Company" v-model="state.experience[index].company"/>
            <Input label="Position" v-model="state.experience[index].position"/>
            <Input label="Description" v-model="state.experience[index].description"/>
            <Input label="Date start" type="date" v-model="state.experience[index].dateStart"/>
            <Input label="Date end" type="date" v-model="state.experience[index].dateEnd"/>
            <button @click="deleteStateArrayItem(state.experience, index)">Delete</button>
        </li>
    </ul>
    <button @click="addStateArrayItem(state.experience, new ExperienceItemModel())">Add new</button>
</template>

<style scoped>
</style>
