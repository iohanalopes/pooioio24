import {Relogio} from "./relogio";

class Adapter {
    relogio: Relogio;
    constructor(hora: number, minuto: number, segundo: number) {
        this.relogio = new Relogio(hora, minuto, segundo);
    }

    setHour(hour: number): void {
        this.relogio.setHora(hour);
    }

    setMinute(minute: number): void {
        this.relogio.setMinuto(minute);
    }

    setSecond(second: number): void {
        this.relogio.setSegundo(second);
    }

    getHour(): number {
        return this.relogio.getHora();
    }

    getMinute(): number {
        return this.relogio.getMinuto();
    }

    getSecond(): number {
        return this.relogio.getSegundo();
    }

    nextSecond(): void {
        return this.relogio.proxSegundo();
    }

    toString(): string {
        return this.relogio.toString();
    }
}

export { Adapter };

