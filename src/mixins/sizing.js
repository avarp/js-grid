export default function(deviceRule, variants) {
  var rules = []

  for (var variant in variants) {
    let
      selector = deviceRule ? deviceRule+'-'+variant : variant,
      value = variants[variant]

    rules = rules.concat([
      ['.w-'+selector, {
        width: value + ' !important'
      }],
      ['.h-'+selector, {
        height: value + ' !important'
      }]
    ])

    if (!deviceRule) {
      rules = rules.concat([
        ['.mw-100', {
          maxWidth: '100% !important'
        }],
        ['.mh-100', {
          maxHeight: '100% !important'
        }],
        ['.min-vw-100', {
          minWidth: '100vw !important'
        }],
        ['.min-vh-100', {
          minHeight: '100vh !important'
        }],
        ['.vw-100', {
          width: '100vw !important'
        }],
        ['.vh-100', {
          height: '100vh !important'
        }]
      ])
    }
  }
  return rules
}