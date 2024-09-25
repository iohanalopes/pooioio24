import { Grafite } from './grafite';
import { Lapiseira } from './lapiseira';

class Adapter {
    lapiseira: Lapiseira;
    
    constructor(thickness: number) {
        this.lapiseira = new Lapiseira(thickness);
    }

    insert(thickness: number, hardness: string, size: number) {
        let grafite = new Grafite(size, thickness, hardness);
        this.lapiseira.insertGrafite(grafite);
    }

    remove() {
        this.lapiseira.remove()
    }

    writePage() {
        this.lapiseira.writePage();
    }

    toString() {
        return this.lapiseira.toString();
    }
}

export {Adapter};
