<script setup>
import Input from './Input.vue';
import { ref, inject } from 'vue'

class EdutItem {
    constructor(name = '', title = '', date = '') {
        this.name = name;
        this.title = title;
        this.date = date;
        
        return {
            name: this.name,
            title: this.title,
            date: this.date,
        }
    }
}

const state = inject('state');

function addNewEducationItem() {
    state.education.push(new EdutItem());
}
</script>

<template>
    <p>Education</p>
    <ul>
        <li v-for="(item, index) in state.education" :key="index">
            <Input label="Name" v-model="state.education[index].name"/>
            <Input label="Title" v-model="state.education[index].title"/>
            <Input label="Date" type="date" v-model="state.education[index].date"/>
        </li>
    </ul>
    <button @click="addNewEducationItem">Add new</button>
</template>

<style scoped>
</style>
