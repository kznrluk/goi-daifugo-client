import { SocketController } from '@/connection/SocketController';

export class SessionDetail {
    private detail: any;
    constructor(private readonly socket: SocketController) {
        this.socket.subscrive('sessionDetail', (data: any) => {
            console.log(data);
            this.detail = data;
        })
    }

}
