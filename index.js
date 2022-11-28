

const calculateDiagonal = (squareSideLength) => {
    
    let squareDiagonal = squareSideLength * Math.SQRT2;
    console.log(squareDiagonal);
    return squareDiagonal;
}


const calculateAreaTriangle = (triangleSideA, triangleSideB, triangleSideC) => {
    
    let halfTrianglePerimeter = (triangleSideA + triangleSideB + triangleSideC) / 2;
    let triangleArea = Math.sqrt(halfTrianglePerimeter  *(halfTrianglePerimeter-triangleSideA)
                                                        *(halfTrianglePerimeter-triangleSideB)
                                                        *(halfTrianglePerimeter-triangleSideC));
    console.log(triangleArea);
    return triangleArea;
}

const calculateCircumferenceCircle = (radiusCircle) => {

    let circumference = 2 * Math.PI * radiusCircle;
    console.log(circumference);
    return circumference;    
}

const calculateAreCircle = (radiusCircle) => {

    let circleArea = Math.PI * radiusCircle ** 2;
    console.log(circleArea);
    return circleArea;
}


calculateDiagonal(9);
calculateAreaTriangle(5, 6, 7);
calculateCircumferenceCircle(4);
calculateAreCircle(4);

