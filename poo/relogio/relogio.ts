class Relogio {
  private hora: number;
  private minuto: number;
  private segundo: number;

  public constructor(hora: number, minuto: number, segundo: number) {
    this.hora = 0;
    this.minuto = 0;
    this.segundo = 0;
  }

  setHora(value: number) {
    if (value < 24 && value >= 0) {
      this.hora = value;
    } else {
      console.log("fail: hora invalida");
    }
  }

  setMinuto(value: number) {
    if (value >= 0 && value < 60) {
      this.minuto = value;
    } else {
      console.log("fail: minuto invalido");
    }
  }

  setSegundo(value: number) {
    if (value >= 0 && value < 60) {
      this.segundo = value;
    } else {
      console.log("fail: segundo invalido");
    }
  }

  getHora(): number {
    return this.hora;
  }

  getMinuto(): number {
    return this.minuto;
  }

  getSegundo(): number {
    return this.segundo;
  }

  proxSegundo(): void {
    this.segundo += 1;
    if (this.segundo > 59) {
      this.segundo = 0;
      this.minuto += 1;
    } if (this.minuto > 59) {
      this.minuto = 0;
      this.hora += 1;
    } if (this.hora > 23) {
      this.hora = 0;
    }
  }

  toString(): string {
    return `${String(this.hora).padStart(2, "0")}:${String(this.minuto).padStart(2, "0")}:${String(this.segundo).padStart(2, "0")}`;
  }
}
export { Relogio };