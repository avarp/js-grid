export default function(deviceRule, columns, rtl) {
  var rules = [];

  for (var width=0; width<columns; width++) {
    let
      offsetLeft1 = deviceRule ? `.offset-${deviceRule}-${width}` : `.offset-${width}`,
      offsetLeft2 = deviceRule ? `.col-ml-${deviceRule}-${width}` : `.col-ml-${width}`,
      offsetRight = deviceRule ? `.col-mr-${deviceRule}-${width}` : `.col-mr-${width}`

    rules = rules.concat([
      [offsetLeft1 + ',' + offsetLeft2, {
        [rtl ? 'marginRight' : 'marginLeft']: (width*100/columns) + '%'
      }],
      [offsetRight, {
        [rtl ? 'marginLeft' : 'marginRight']: (width*100/columns) + '%'
      }]
    ])
  }
  return rules
}