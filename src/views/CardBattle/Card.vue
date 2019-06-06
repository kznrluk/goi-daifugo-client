<template>
    <div class="card">
        <div class="print">
            <div>
                <p>{{ word }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    @Component({
        props: ['word']
    })
    export default class Card extends Vue {}
</script>
<style>
    p {
        color: white;
        font-size: 40px;
    }
    .card {
        background-color: #42b983;
        width: 300px;
        height: 485px;
        padding: 15px;
        border-radius: 10px;
    }
    .print {
        display: grid;
        justify-self: center;
        align-self: center;
        background-color: rgba(255,255,255,0.2);
        text-align: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 10px;
    }
</style>
