class Point2D {
  x: number;
  y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
  }
}

abstract class Shape {
  name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  abstract getArea(): number {
    }

  abstract getPerimeter(): number {
  }

  public toString(): string {
    return this.name;
  }
}

class Circle extends Shape {
  private name: string = "Circ";

  constructor(public center: Point2D, public radius: number) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2); // Área: π * r²
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius; // Perímetro: 2 * π * r
  }

  toString(): string {
    return `${this.name}: C=${this.center.toString()}, R=${this.radius.toFixed(2)}`;
  }
}


class Rectangle extends Shape {
  P1: Point2D
  P2: Point2D

  public constructor(P1: Point2D, P2: Point2D) {
    super("Rect");
    this.P1 = P1;
    this.P2 = P2;
  }

  getArea(): number {
    const width = Math.abs(this.P1.x - this.P2.x);
    const height = Math.abs(this.P1.y - this.P2.y);
    return width * height;
  }

  getPerimeter(): number {
    const width = Math.abs(this.P1.x - this.P2.x);
    const height = Math.abs(this.P1.y - this.P2.y);
    return 2 * (width + height);
  }

  public toString(): string {
    return `${this.name}: P1=${this.P1.toString()} P2=${this.P2.toString()}`
  }
}

export { Circle, Rectangle, Shape, Point2D }
