import { SocketController } from '@/connection/SocketController';

export class EventReceiver {
    constructor(private readonly socket: SocketController) {
    }

    public watch(eventName: string, v: any) {
        this.socket.subscrive(eventName, (data: any) => {
            v = data;
        })
    }
}
