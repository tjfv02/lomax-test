const drawPineTree = (height: number) => {

    for (let i = 1; i <= height; i++) {

      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);

    }
    // tronco :)
    const trunkSpaces = ' '.repeat(height - 1);
    console.log(trunkSpaces + '*');
  }
  
  
  drawPineTree(10);
  