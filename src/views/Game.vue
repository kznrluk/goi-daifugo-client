<template>
    <p v-if="!this.isConnected">Loading...</p>
    <GoiDaifugo :socket="this.socket" v-else="this.isConnected"></GoiDaifugo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SocketController } from "@/connection/SocketController";
import GoiDaifugo from '@/views/GoiDaifugo.vue';

@Component({
    components: {
        GoiDaifugo,
    }
})
export default class Game extends Vue {
    public socket: SocketController = new SocketController();
    public isConnected: boolean = false;
    public created() {
        this.socket.subscrive('playerList', () => {
            this.isConnected = true;
        });
    }
}
</script>
