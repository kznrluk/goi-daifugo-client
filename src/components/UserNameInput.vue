<template>
    <input v-on:input="this.handler">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserNameInput extends Vue {
    @Prop() private msg!: string;
    @Prop() private emitter!: Function;
    handler(ev: Event) {
        this.emitter((<HTMLInputElement>ev.target).value);
    }
}
</script>

<style>

</style>
