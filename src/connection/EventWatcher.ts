import { SocketController } from '@/connection/SocketController';

export class EventWatcher {
    private data: any = null;
    constructor(socket: SocketController, eventName: string) {
        socket.subscrive(eventName, (data: any) => {
            this.data = data;
        });
    }

    public get(key?: string) {
        // 流石によくない
        return (!this.data)
            ? {}
            : (key)
                ? (this.data[key])
                    ? this.data[key]
                    : {}
                : this.data;
    }
}
