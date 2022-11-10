<script setup>
import Input from './Input.vue';
import { addStateArrayItem, deleteStateArrayItem } from '../composables/use-add-remove-array-items';
import { ExperienceItemModel } from '../models/experience-item-model';
import { inject } from 'vue'

const state = inject('state');

function addNewExperienceItem(state) {
    addStateArrayItem(state, new ExperienceItemModel())
}
</script>

<template>
    <h2>Experience</h2>
    <ul>
        <li v-for="(item, index) in state.experience" :key="index">
            <Input label="Company" v-model="state.experience[index].company"/>
            <Input label="Position" v-model="state.experience[index].position"/>
            <Input label="Description" type="textarea" v-model="state.experience[index].description"/>
            <Input label="From" type="year" v-model="state.experience[index].yearStart"/>
            <Input label="To" type="year" v-model="state.experience[index].yearEnd"/>
            <button class="is-secondary" @click="deleteStateArrayItem(state.experience, index)">Delete</button>
        </li>
    </ul>
    <button class="is-fluid" @click="addNewExperienceItem(state.experience)">+ Add new</button>
</template>

<style scoped>
</style>
