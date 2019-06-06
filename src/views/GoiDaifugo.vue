<template>
    <div>
        <Card word="hoge"/>
        <p>- INPUT YOUR NAME -</p>
        <UserNameInput :emitter="this.socket.createEmitter('changeOwnName')" />
        <span v-for="(value, key) in this.playerList.ownData">
            <br>{{ key.toUpperCase() }}: {{ value }}
        </span>
        <p>- INPUT YOUR WORDS -</p>
        <span v-for=""></span>
        <p>- PLAYER LIST -</p>
        <li v-for="obj in this.playerList.playerData">
            {{ obj.name }}
        </li>
        <div></div>
        <button v-if="this.playerList.ownData.isMaster"
                v-on:click="socket.emit('startSession')">
            START
        </button>
        <button v-else="this.playerList.ownData.isMaster"
                v-on:click="this.socket.emit('changeOwnReadyStatus', true)">
            READY
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { SocketController } from "@/connection/SocketController";
import UserNameInput from '@/components/UserNameInput.vue';
import { PlayerList } from "@/API/PlayerList";
import Card from '@/views/CardBattle/Card.vue';
@Component({
    components: { UserNameInput, Card },
})
export default class GoiDaifugo extends Vue {
    @Prop() public socket!: SocketController;
    private playerList: PlayerList = new PlayerList(this.socket);

    created() {
        console.log(this.socket)
    }

    ready() {
        if (this.socket) {
            this.socket.emit('startSession');
            console.log('スタート')
        } else {
            console.log('ナイヨ')
        }
    }
}
</script>
