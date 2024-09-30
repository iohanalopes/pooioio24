class Lead {
    private thickness: number;
    private hardness: string;
    private size: number;

    public constructor(calibre: number, dureza: string, tamanho: number) {
        this.thickness = calibre;
        this.hardness = dureza;
        this.size = tamanho;
    }

    public toString(): string {
        return `${this.thickness}:${this.hardness}:${this.size}`;
    }

    public usagePerSheet(): number {
        if (this.hardness === 'HB')
            return 1;
        if (this.hardness === '2B')
            return 2;
        if (this.hardness === '4B')
            return 4;
        return 6;
    }

    public getThickness(): number {
        return this.thickness;
    }

    public getHardness(): string {
        return this.hardness;
    }

    public getSize(): number {
        return this.size;
    }

    public setSize(size: number): void {
        this.size = size;
    }
}

class Pencil {
    private thickness: number;
    private tip: Lead | null; // lead da ponta
    private barrel: Array<Lead> = new Array<Lead>(); // grafites no cano

    public constructor(thickness: number) {
        this.thickness = thickness;
        this.tip = null;
    }

    public insert(lead: Lead): boolean {
        if (lead.getThickness() !== this.thickness) {
            console.log("fail: calibre incompatível");
            return false;
        }
        this.barrel.push(lead);
        return true;
    }

    public remove(): Lead | null {
        if (this.tip !== null) {
            const removedLead = this.tip;
            this.tip = null;
            return removedLead;
        }
        console.log("fail: nao existe grafite no bico");
        return null;
    }

    public pull(): boolean {
        if (this.tip !== null) {
            console.log("fail: ja existe grafite no bico");
            return false;
        }
        if (this.barrel.length === 0) {
            console.log("fail: nao existe grafite no tambor");
            return false;
        }
        this.tip = this.barrel.shift() || null;
        return true;
    }

    public writePage(): void {
        if (this.tip === null) {
            console.log("fail: nao existe grafite no bico");
            return;
        }

        let usage = this.tip.usagePerSheet();
        if (this.tip.getSize() <= 10) {
            console.log("fail: grafite muito pequeno");
            this.remove();
            return;
        }

        if (this.tip.getSize() - usage < 10) {
            console.log("fail: folha incompleta");
            this.tip.setSize(10);
            this.remove();  // Remover o grafite logo após ele ficar muito pequeno
        } else {
            this.tip.setSize(this.tip.getSize() - usage);
            if (this.tip.getSize() <= 10) {
                console.log("fail: grafite muito pequeno");
                this.remove();  // Remover caso ele se torne muito pequeno após escrita
            }
        }
    }

    public toString(): string {
        let output =  "calibre: " + this.thickness + ", bico: " +
                (this.tip != null ? "[" + this.tip + "]" : "[]") + ", tambor: {";
        for (let g of this.barrel) {
            output += "[" + g + "]";
        }  
        output += "}";

        return output;
    }
}

function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let pencil = new Pencil(0.5);

    while (true) {
        write("$", "");
        let line = input();
        write(line); // _TEST_ONLY_
        let args = line.split(" ");

        if (args[0] == "end") {
            break;
        } else if (args[0] == "init") {
            pencil = new Pencil(+args[1]);
        } else if (args[0] == "insert") {
            pencil.insert(new Lead(+args[1], args[2], +args[3]));
        } else if (args[0] == "remove") {
            pencil.remove();
        } else if (args[0] == "pull") {
            pencil.pull();
        } else if (args[0] == "write") {
            pencil.writePage();
        } else if (args[0] == "show") {
            console.log(pencil.toString());
        } else {
            write("fail: comando invalido");
        }
    }
}

main()