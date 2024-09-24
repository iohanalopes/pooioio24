import { Kid } from "./kid";

class Trampoline {
    private playing: Kid[] = [];
    private waiting: Kid[] = [];
    
    static removeFromList(name: string, list: Kid[]): Kid | null {
        const index = list.findIndex(kid => kid.getName() === name);
        if (index !== -1) {
        return list.splice(index, 1)[0];
        }
        return null;
    }
    
    arrive(kid: Kid): void {
        this.waiting.unshift(kid);
    }
    
    enter(): void {
        if (this.waiting.length > 0) {
            // Remove a última criança da fila de espera (não a primeira) e adiciona ao pula-pula
            const kid = this.waiting.pop(); // remove a última criança da fila de espera
            if (kid) {
                this.playing.unshift(kid); // adiciona ao começo da lista de quem está brincando
            }
        }
    }
    
    leave(): void {
        if (this.playing.length > 0) {
            // Remove a última criança que entrou no pula-pula e coloca de volta na fila de espera
            const kid = this.playing.pop(); // remove a última criança que está brincando
            if (kid) {
                this.waiting.unshift(kid); // coloca no começo da fila de espera
            }
        }
    }
    
    removeKid(name: string): Kid | null {
        const removedFromWaiting = Trampoline.removeFromList(name, this.waiting);
        if (removedFromWaiting) {
            return removedFromWaiting;
        }
        return Trampoline.removeFromList(name, this.playing);
    }
    
    toString(): string {
        const waitingList = this.waiting.map(kid => kid.toString()).join(', ');
        const playingList = this.playing.map(kid => kid.toString()).join(', ');
        return `[${waitingList}] => [${playingList}]`;
    }
}

export { Trampoline };