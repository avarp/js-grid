export default function(deviceRule, gutters) {
  var rules = []

  for (var key in gutters) {
    let
      selector = deviceRule ? `.gutt-${deviceRule}-${key}` : `.gutt-${key}`
    rules.push(
      ['.row'+selector, {
        margin: '-'+half(gutters[key])
      }]
    )
    rules.push(
      ['.row'+selector+'>[class^="col"]', {
        padding: half(gutters[key])
      }]
    )
  }
  return rules
}

function half(cssValue) {
  const
    value = cssValue.split('').filter(s => /[\.\-0-9]/.test(s)).join(''),
    units = cssValue.substr(value.length);
  return String(parseFloat(value)/2) + units;
}