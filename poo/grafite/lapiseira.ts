import Grafite from './grafite'

class Lapiseira {
  private thickness: number; // Espessura da lapiseira (0.5)
  private tip: Grafite | null; // Ponta da lapiseira

  constructor(thickness: number){
    this.thickness = thickness;
    this.tip = null;
  }

  // Retorna se a lapiseira tem grafite atualmente
  public hasGrafite(): boolean {
    if(this.tip == null) return false;

    return true;
  }

  // Insere um grafite na lapiseira se não houver
  public insertGrafite(grafite: Grafite): boolean {
    if( this.hasGrafite() ){
      console.log("fail: ja existe grafite");
      return false;
    } else if( grafite.getThickness() !== this.thickness ) {
        console.log("fail: calibre incompativel");
        return false;
    } else {
        this.tip = grafite;
        return true;
    }
  }

  public remove(): Grafite | null {
    if( !this.hasGrafite() ){
      console.log("fail: nao existe grafite");
      return null;
    } else {
      let removedGrafite = this.tip;
      this.tip = null;
      return removedGrafite;
    }
  }

  public writePage(): void {
    if( !this.hasGrafite() ){
      console.log("fail: nao existe grafite");
      return;
    }

    if( this.tip!.getSize() <= 10 ){
      console.log("fail: tamanho insuficiente");
      return;
    }

    let usage = this.tip!.usagePerSheet();

    if( this.tip!.getSize() - usage < 10){
      this.tip!.setSize(10);
      console.log("fail: folha incompleta");
      return;
    } else {
      this.tip!.setSize(this.tip!.getSize() - usage);
    }
  }

  public toString(): string {
    let ponta;
    
    if( this.tip == null )
      ponta = "null";
    else
      ponta = this.tip.toString();
    
    return `calibre: ${this.thickness.toFixed(1)}, grafite: ${ponta}`;
  }
}

export { Lapiseira };
