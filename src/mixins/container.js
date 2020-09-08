export default function(deviceRule, containers) {
  var rules = []

  var selector = ['.container']
  for (var device in containers) {
    selector.push('.container-'+device)
    if (device == deviceRule) break
  }
  selector = selector.join(',')

  if (deviceRule == '') {
    rules.push(
      [selector, {
        width: '100%'
      }]
    )
  } else {
    rules.push(
      [selector, {
        margin: '0 auto',
        maxWidth: containers[deviceRule]
      }]
    )
  }

  return rules
}
