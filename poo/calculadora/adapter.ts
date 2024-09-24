import {Calculadora} from "./calculadora";

class Adapter {
    calculadora: Calculadora;
    public constructor(batteryMax: number) {
        this.calculadora = new Calculadora(batteryMax);
    }

    public show(): string {
        return this.calculadora.toString();
    }

    public charge(value: number): void {
        return this.calculadora.carregar(value);
    }

    public sum(a: number, b: number): void {
        return this.calculadora.soma(a, b);
    }

    public div(a: number, b: number): void {
        return this.calculadora.dividir(a, b);
    }
}

export { Adapter };


if (require.main === module) {
    console.log("Testando Adapter");
}
