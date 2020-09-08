export default function(deviceRule) {
  var rules = [];
  for (var ord=-1; ord<=13; ord++) {
    let selector = '.order'
    if (deviceRule) selector += '-'+deviceRule
    if (ord == -1) selector += '-first'
    else if (ord == 13) selector += '-last'
    else selector += '-'+ord
    rules.push(
      [selector, {
        order: ord,
      }]
    );
  }
  return rules;
}