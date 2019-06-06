import { connect } from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import { EventReceiver } from '@/connection/EventReceiver';
import { EventWatcher } from '@/connection/EventWatcher';

export class SocketController {
    private socket: Socket;
    private subscriber: Map<string, Function> = new Map<string, Function>();
    constructor(sessionId: number = 2) {
        const socket: Socket = connect(`http://localhost:3010/session/${sessionId}`);
        this.socket = socket;
        this.socket.emit('joinSession');
    }

    public isOwnId(id: string) {
        return this.socket.id === id;
    }

    public createReceiver() {
        return new EventReceiver(this);
    }

    public createWatcher(eventName: string) {
        return new EventWatcher(this, eventName);
    }

    public emitPromise(eventName: string, data?: any): Promise<any> {
        this.socket.emit(eventName, data)
        this.socket.on('isBack', (n: any) => console.log(n));
        return new Promise(((resolve, reject) => {
            const id = setTimeout(() => {
                this.unsubscrive(eventName);
                reject();
            }, 1000);

            this.subscrive(eventName, (...args: any) => {
                clearTimeout(id);
                resolve(...args);
            });
        }));
    }

    public emit(eventName: string, data?: any) {
        this.socket.emit(eventName, data);
    }

    public createEmitter(eventName: string) {
        return (data?: any) => {
            this.emit(eventName, data);
        }
    }

    public subscrive(functionName: string, func: Function) {
        this.socket.on(functionName, func);
    }

    public unsubscrive(functionName: string) {
        this.socket.off(functionName);
    }
}
