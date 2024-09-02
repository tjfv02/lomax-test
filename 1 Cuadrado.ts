type Point = {
  x: number;
  y: number;
};

const distance = (p1: Point, p2: Point) : number => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)); // Calcular distancia
};

const isSquare = (p1: Point, p2: Point, p3: Point, p4: Point): boolean =>{
    const dists = [
    //distancias entre puntos
      distance(p1, p2),
      distance(p1, p3),
      distance(p1, p4),
      distance(p2, p3),
      distance(p2, p4),
      distance(p3, p4),
    ];
  
    dists.sort((a, b) => a - b); // ordener por distancias entre puntos
  
    return (
      dists[0] === dists[1] &&
      dists[1] === dists[2] &&
      dists[2] === dists[3] &&
      dists[4] === dists[5] &&
      dists[4] === dists[0] * Math.sqrt(2)
    );
  }


  // Ejemplo de uso:
const p1 = { x: 0, y: 0 };
const p2 = { x: 0, y: 2 };
const p3 = { x: 2, y: 2 };
const p4 = { x: 2, y: 0 };

if (isSquare(p1, p2, p3, p4)) {
    console.log("Los puntos forman un cuadrado");
} else {
    console.log("Los puntos no forman un cuadrado");
} 