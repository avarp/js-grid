export default function(deviceRule, variants, rtl) {
  var rules = []

  for (var variant in variants) {
    let
      selector = deviceRule ? deviceRule+'-'+variant : variant,
      value = variants[variant] + ' !important'

    rules = rules.concat([
      ['.m-'+selector, {
        margin: value
      }],
      [`.mt-${selector},.my-${selector}`, {
        marginTop: value
      }],
      [`.mb-${selector},.my-${selector}`, {
        marginBottom: value
      }],
      [`.ml-${selector},.mx-${selector}`, {
        [rtl ? 'marginRight' : 'marginLeft']: value
      }],
      [`.mr-${selector},.mx-${selector}`, {
        [rtl ? 'marginLeft' : 'marginRight']: value
      }]
    ])
  }
  return rules
}