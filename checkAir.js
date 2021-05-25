const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  let airQuality = "";
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySamples++;
    }
  }
  if ((dirtySamples / 10) > threshold) {
    airQuality = "Polluted";
  } else {
    airQuality = "Clean";
  }
  return airQuality;
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))