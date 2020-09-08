export default function(deviceRule) {
  var rules = [];
  
  [
    'none',
    'inline',
    'inline-block',
    'block',
    'table',
    'table-row',
    'table-cell',
    'flex',
    'inline-flex'
  ]
  .forEach(display => {
    var selector = deviceRule ? '.d-'+deviceRule+'-'+display : '.d-'+display
    rules.push(
      [selector, {
        display: display + ' !important'
      }]
    )
  })
  
  return rules
}