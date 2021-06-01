// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  const volume = (4 / 3) * PI * (radius ** 3);
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  const volume = (1 / 3) * PI * (radius ** 2) * height;
  return volume
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const volume = height * width * depth;
  return volume
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;
  for (const solid of solids) {
    if (solid === largeSphere) {
      volume += sphereVolume(largeSphere.radius)

    } else if (solid === smallSphere) {
      volume += sphereVolume(smallSphere.radius)

    } else if (solid === cone) {
      volume += sphereVolume(cone.radius, cone.height)

    }
  } return volume
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);