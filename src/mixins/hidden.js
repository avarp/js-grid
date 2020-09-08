export default function(deviceRule) {
  var selector = deviceRule ? `.hidden-${deviceRule}` : '.hidden'
  return [[selector, {
    display: 'none !important'
  }]]
}