type Circle = {
  shape: "circle";
  radius: number;
}

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
}

function calculateShapeArea (item: Circle | Rectangle): number {
  if(item.shape === "circle"){
    return Math.PI * item.radius * item.radius;
  }else if((item.shape === 'rectangle')){
    return item.width*item.height;
  }
  throw new Error('Invalid Structure');
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log('circle area -> ', circleArea);
console.log('rectangle area -> ', rectangleArea);