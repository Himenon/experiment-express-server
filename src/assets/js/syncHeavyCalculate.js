(async () => {
  const density = (x, y, z) => {
    return Math.sqrt(x * y * Math.sin(z) ** 2);
  }
  // 時間のかかる同期的な計算処理
  const calculate = (width, height, depth) => {
   let volume = 0;
   const deltaX = 0.1;
   const deltaY = 0.1;
   const deltaZ = 0.1;
   for (let x = 0; x <= width; x += deltaX) {
    for (let y = 0; y <= height; y += deltaY) {
      for (let z = 0; z <= depth; z += deltaZ) {
        volume += deltaX * deltaY * deltaZ * density(x, y, z);
      }
    } 
   }
   return volume;
  }
  console.log(`volume = ${calculate(100, 100, 100)}`);
})();

