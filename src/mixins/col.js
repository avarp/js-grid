export default function(deviceRule, columns) {
  var rules = []
  for (var width=1; width<=columns; width++) {
    let selector = deviceRule ? `.col-${deviceRule}-${width}` : `.col-${width}`
    rules.push(
      [selector, {
        flex: `0 0 ${width*100/columns}%`,
        maxWidth: `${width*100/columns}%`
      }]
    )
  }
  var selector = deviceRule ? '.col-'+deviceRule : '.col'
  rules.push(
    [selector+'-auto', {
      flex: '0 0 auto',
      width: 'auto',
      maxWidth: '100%'
    }]
  )
  rules.push(
    [selector, {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%'
    }]
  )
  return rules
}