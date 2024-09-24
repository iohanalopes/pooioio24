import { Circle, Rectangle, Shape, Point2D } from "./shapes";

class Adapter {
    shapes: Shape[] = [];
    
    circle(x: number, y: number, r: number): void {
        const newCircle = new Circle(new Point2D(x, y), r);
        this.shapes.push(newCircle);
    }

    rectange(x1: number, y1: number, x2: number, y2: number): void {
        const newRectangle = new Rectangle(new Point2D(x1, y1), new Point2D(x2, y2));
        this.shapes.push(newRectangle);
    }

    info(): string {
        return this.shapes
          .map(
            (shape) =>
              `${shape.getName()}: A=${shape.getArea().toFixed(2)} P=${shape.getPerimeter().toFixed(2)}`
          )
          .join("\n");
    }


    toString(): string {
        return this.shapes.map((shape) => shape.toString()).join("\n");
    }

}

export { Adapter };