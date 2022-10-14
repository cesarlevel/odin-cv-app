<script setup>
import { ref, inject } from 'vue';
import html2pdf from "html2pdf.js";

const state = inject('state');
const emptyValue = '—';

function exportToPdf() {
    html2pdf(document.getElementById("preview-paper"), {
        margin: 0,
        filename: `${state.general.name.toLowerCase().split(' ').join('')}-cv.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
</script>

<template>
    <div class="actions">
        <button @click="exportToPdf">📁 Export to PDF</button>
    </div>
    <div id="preview-paper">    
        <div class="header">
            <h1>{{state.general.name || emptyValue}}</h1>
            <h3>{{state.general.role || emptyValue}}</h3>
        </div>
        <div class="content">
            <div class="left-column">
                <h2>Contact</h2>
                <p>{{state.general.email || emptyValue}}</p>
                <p>{{state.general.phoneNumber || emptyValue}}</p>
                <h2>Education</h2>
                <ul>
                    <li v-for="(education, index) in state.education" :key="index">
                        <p><strong>{{education.institutionName || emptyValue}}</strong></p>
                        <p class="is-muted">{{education.title || emptyValue}}</p>
                        <p class="is-muted">{{education.yearStart || emptyValue}} - {{education.yearEnd || emptyValue}}</p>
                    </li>
                </ul>
            </div>
            <div class="right-column">
                <p>{{state.general.aboutMe || emptyValue}}</p>
                <h2>Work experience</h2>
                <ul>
                    <li v-for="(experience, index) in state.experience" :key="index">
                        <p><strong>{{experience.position || emptyValue}}</strong></p>
                        <p class="is-muted">{{experience.company || emptyValue}} / {{experience.yearStart || emptyValue}} - {{experience.yearEnd || emptyValue}}</p>
                        <p class="description">{{experience.description || emptyValue}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #preview-paper {
        background-color: #ffffff;
        color: var(--odin-cv-primary-color);
        padding: 40px;
        border-radius: 6px;
        align-content: flex-start;
        margin-inline: auto;
    }

    .content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .actions {
        text-align: right;
        margin-bottom: 12px;
    }

    .header {
        border-bottom: 4px solid var(--odin-cv-muted-background);
        margin-bottom: 48px;
        padding-bottom: 20px;
    }
    
    .left-column {
        flex: 0 0 30%;
        box-sizing: border-box;
        padding: 20px;
        background: var(--odin-cv-muted-background);
        border-radius: 8px;
    }

    .right-column {
        flex: 0 0 70%;
        box-sizing: border-box;
        padding: 0 20px 20px 30px;
    }

    li + li {
        margin-top: 20px;
    }

    h1, h3 {
        margin: 0;
    }

    h1 {font-weight: bolder;}

    h2 {
        margin-bottom: 24px;
    }

    h3 {
        color: var(--odin-cv-sencondary-color);
        margin-top: 6px;
    }

    .left-column h2:last-of-type {
        margin-top: 48px;
    }

    .right-column h2 {
        margin-top: 48px;
    }

    p {
        margin: 0;
    }

    .description {
        margin-top: 6px;
    }
</style>
