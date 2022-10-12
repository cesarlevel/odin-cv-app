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

</script>

<template>
    <div>
        <label v-if="label">{{label}}</label>
        <input :type="type" @input="inputChange" type="text" :value="modelValue">
        <small v-if="help">{{help}}</small>
    </div>
</template>

<style scoped>
</style>
