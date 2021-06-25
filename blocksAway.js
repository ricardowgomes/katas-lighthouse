const blocksAway = (directions) => {
  const direction = { east: 0, north: 0 };

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right" && (directions[i - 2] === "left" || directions[i - 2] === undefined)) {
      direction.east += directions[i + 1];

    } else if (directions[i] === "left" && directions[i - 2] === "right") {
      direction.north += directions[i + 1];

    } else if (directions[i] === "left" && directions[i - 2] === "left") {
      direction.east -= directions[i + 1];

    } else if (directions[i] === "left" && (directions[i - 2] === "right" || directions[i - 2] === undefined)) {
      direction.north += directions[i + 1];

    } else if (directions[i] === "right" && directions[i - 2] === "right" && directions[i - 4] !== "right") {
      direction.north -= directions[i + 1];

    } else if (directions[i] === "right" && directions[i - 2] === "right" && directions[i - 4] === "right") {
      direction.east -= directions[i + 1];
    }
  }

  return direction;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));