import col from './mixins/col.js'
import container from './mixins/container.js'
import display from './mixins/display.js'
import flex from './mixins/flex.js'
import gutter from './mixins/gutter.js'
import hidden from './mixins/hidden.js'
import margin from './mixins/margin.js'
import offset from './mixins/offset.js'
import order from './mixins/order.js'
import padding from './mixins/padding.js'
import sizing from './mixins/sizing.js'
import textAlign from './mixins/text-align.js'



export default function(config) {
  let html = document.documentElement;
  config.rtl = html.hasAttribute('dir') && html.getAttribute('dir') == 'rtl'
  const style = document.createElement('STYLE')
  style.textContent = stringifyCssRules(generateGrid(config))
  document.head.appendChild(style)
  console.log('Grid created.');
}




function generateGrid({devices, containers, columns, gutters, margins, paddings, sizings, rtl})
{
  var output = [
    ['.row', {
      display: 'flex',
      flexFlow: 'row wrap',
      boxSizing: 'border-box'
    }],

    ['[class*="col"]', {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    }],

    ['.container', {
      boxSizing: 'border-box'
    }],

    ['[hidden]', {
      display: 'none !important'
    }]
  ]
  
  for (var device in devices) {

    let
      minWidth = devices[device],
      keys = Object.keys(devices),
      i = keys.indexOf(device),
      maxWidth = (i == keys.length-1) ? 999999 : devices[keys[i+1]]-1,
      deviceRuleUp = minWidth ? device : '',
      deviceRuleOnly = device + '-only',
      deviceRuleDown = device + '-down'

    // min-width rules 
    output.push([
      `@media (min-width:${minWidth}px)`,
      [].concat(
        col(deviceRuleUp, columns),
        container(deviceRuleUp, containers),
        display(deviceRuleUp),
        flex(deviceRuleUp),
        gutter(deviceRuleUp, gutters),
        hidden(deviceRuleUp),
        margin(deviceRuleUp, margins, rtl),
        offset(deviceRuleUp, columns, rtl),
        order(deviceRuleUp),
        padding(deviceRuleUp, paddings, rtl),
        sizing(deviceRuleUp, sizings),
        textAlign(deviceRuleUp, rtl)
      )
    ])

    // min- and max-width rules 
    output.push([
      `@media (min-width:${minWidth}px) and (max-width:${maxWidth}px)`,
      [].concat(
        hidden(deviceRuleOnly)
      )
    ])

    // max-width rules
    output.push([
      `@media (max-width:${maxWidth}px)`,
      [].concat(
        hidden(deviceRuleDown)
      )
    ])
  }

  return output
}




function stringifyCssRules(rules)
{
  var css = [];
  for (var i=0; i<rules.length; i++) {
    let
      selector = rules[i][0],
      properties = rules[i][1]
    if (selector.charAt(0) == '@') {
      css = css.concat([selector, '{', stringifyCssRules(properties)], '}')
    } else {
      css = css.concat([selector, '{', stringifyCssProperties(properties)], '}')
    }
  }
  return css.join('')
}




function stringifyCssProperties(properties)
{
  var css = [];
  for (var i in properties) {
    let
      value = properties[i],
      property = i.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    css = css.concat([property, ':', value, ';'])
  }
  return css.join('')
}