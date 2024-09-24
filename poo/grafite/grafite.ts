class Grafite {
  private thickness: float; //calibre, espessura
  private hardness: string;  //dureza
  private size: int; //tamanho

  public constructor(thickness: float, hardness: string, size: int) {
    this.thickness = thickness;
    this.hardness = hardness;
    this.size = size;
  }

  public usagePerSheet(): number {
      if (this.hardness === 'HB')
          return 1;
      if (this.hardness === '2B')
          return 2;
      if (this.hardness === '4B')
          return 4;
      if (this.hardness === '6B')
          return 6;
      return 0;
  }

  
}