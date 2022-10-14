<script setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    help: String,
});

function inputChange({target}) {
    emit('update:modelValue', target.value)
}

function optionsYears() {
    const startingYear = new Date().getFullYear() - 80;
    return Array.from({length: 81}, (_, i) => startingYear + i);
}

</script>

<template>
    <div>
        <label v-if="label">{{label}}</label>
        <textarea rows="4" v-if="type === 'textarea'" @input="inputChange" :value="modelValue" />
        <select rows="4" v-else-if="type === 'year'" @input="inputChange" :value="modelValue">
            <option value="">Select year</option>
            <option v-for="(year, index) in optionsYears()" :value="year" :key="index">{{year}}</option>
        </select>
        <input v-else :type="type" @input="inputChange" type="text" :value="modelValue">
        <small v-if="help">{{help}}</small>
    </div>
</template>

<style scoped>
    div {
        margin-bottom: 16px;
    }

    label {
        display: block;
        margin-bottom: 2px;
        font-weight: bold;
    }

    input,
    textarea,
    select {
        font-size: 16px;
        padding: 8px 12px;
        background: rgba(255, 255, 255, 0.2);
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        border-radius: 6px;
        border: none;
        width: 100%;
        box-sizing: border-box;
    }

    input:hover,
    input:focus,
    textarea:hover,
    textarea:focus,
    select:hover,
    select:focus {
       outline-color: var(--odin-cv-sencondary-color); 
    }
</style>
