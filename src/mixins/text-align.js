export default function(deviceRule, rtl) {
  var
    rules = [],
    aligns = {
      '.r': rtl ? 'left' : 'right',
      '.c': 'center',
      '.l': rtl ? 'right' : 'left',
    }

  for (var align in aligns) {
    let
      selector = deviceRule ? align+'-'+deviceRule : align,
      value = aligns[align]

    rules.push(
      [selector, {
        textAlign: value + ' !important'
      }]
    )
  }
  return rules
}