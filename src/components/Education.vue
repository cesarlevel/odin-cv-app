<script setup>
import Input from './Input.vue';
import { addStateArrayItem, deleteStateArrayItem } from '../composables/use-add-remove-array-items';
import { EducationItemModel } from '../models/education-item-model';
import { inject } from 'vue'

const state = inject('state');
</script>

<template>
    <h2>Education</h2>
    <ul>
        <li v-for="(item, index) in state.education" :key="index">
            <Input label="Institution Name" v-model="state.education[index].institutionName"/>
            <Input label="Title" v-model="state.education[index].title"/>
            <Input label="From" type="year" v-model="state.education[index].yearStart"/>
            <Input label="To" type="year" v-model="state.education[index].yearEnd"/>
            <button class="is-secondary" @click="deleteStateArrayItem(state.education, index)">Delete</button>
        </li>
    </ul>
    <button class="is-fluid" @click="addStateArrayItem(state.education, new EducationItemModel())">+ Add new</button>
</template>

<style scoped>
</style>
