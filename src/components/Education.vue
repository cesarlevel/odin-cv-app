<script setup>
import Input from './Input.vue';
import { addStateArrayItem, deleteStateArrayItem } from '../composables/use-add-remove-array-items';
import { EducationItemModel } from '../models/education-item-model';
import { inject } from 'vue'

const state = inject('state');
</script>

<template>
    <p>Education</p>
    <ul>
        <li v-for="(item, index) in state.education" :key="index">
            <Input label="Name" v-model="state.education[index].name"/>
            <Input label="Title" v-model="state.education[index].title"/>
            <Input label="Date start" type="date" v-model="state.education[index].dateStart"/>
            <Input label="Date end" type="date" v-model="state.education[index].dateEnd"/>
            <button @click="deleteStateArrayItem(state.education, index)">Delete</button>
        </li>
    </ul>
    <button @click="addStateArrayItem(state.education, new EducationItemModel())">Add new</button>
</template>

<style scoped>
</style>
