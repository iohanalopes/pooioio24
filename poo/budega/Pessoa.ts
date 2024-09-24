class Pessoa {
    private nome: string;

    public constructor(nome: string){
        this.nome = nome;
    }

    public toString(): string {
        return this.nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }
}

export { Pessoa };