import { SocketController } from '@/connection/SocketController';

export class PlayerList {
    // TODO: 型付け
    public ownData: any = {};
    public playerData: any = [];
    constructor(private readonly socket: SocketController) {
        this.socket.emit('emitPlayerList');
        this.socket.subscrive('playerList', (data: any) => {
            this.ownData = data.find((d: any) => this.socket.isOwnId(d.id));
            this.playerData = data;
        })
    }
}



