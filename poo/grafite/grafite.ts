class Grafite { // Lead
    private size: number; // Tamho do grafite (50)
    private thickness: number; // Espessura do grafite (0.5)
    private hardness: string; // Dureza do grafite (2B)
  
    constructor(size: number, thickness: number, hardness: string){
      this.size = size;
      this.thickness = thickness;
      this.hardness = hardness;
    }
  
    // Retorna a quantidade de grafito gasto pro folha.
    public usagePerSheet(): number {
      if(this.hardness === "HB") return 1;
      if(this.hardness === "2B") return 2;
      if(this.hardness === "4B") return 4;
      if(this.hardness === "6B") return 6;
  
      return 0;
    }
  
    // Getters
    public getSize(): number{ return this.size; }
    public getThickness(): number{ return this.thickness; }
    public getHardness(): string{ return this.hardness; }
  
    // Setter
    public setSize(size: number){ this.size = size; }
  
    // Retorna as propriedades do Grafite em string
    public toString(){
      return `[${this.thickness}:${this.hardness}:${this.size}]`
    }
  }
  
  export { Grafite };
