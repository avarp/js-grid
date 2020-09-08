export default function(deviceRule, variants, rtl) {
  var rules = []

  for (var variant in variants) {
    let
      selector = deviceRule ? deviceRule+'-'+variant : variant,
      value = variants[variant] + ' !important'

    rules = rules.concat([
      ['.p-'+selector, {
        padding: value
      }],
      [`.pt-${selector},.py-${selector}`, {
        paddingTop: value
      }],
      [`.pb-${selector},.py-${selector}`, {
        paddingBottom: value
      }],
      [`.pl-${selector},.px-${selector}`, {
        [rtl ? 'paddingRight' : 'paddingLeft']: value
      }],
      [`.pr-${selector},.px-${selector}`, {
        [rtl ? 'paddingLeft' : 'paddingRight']: value
      }]
    ])
  }

  return rules
}