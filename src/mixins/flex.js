export default function(deviceRule) {
  var rules = [
    [
      ['flex', 'row'],
      {flexDirection: ''}
    ],
    [
      ['flex', 'column'],
      {flexDirection: ''}
    ],
    [
      ['flex', 'row-reverse'],
      {flexDirection: ''}
    ],
    [
      ['flex', 'column-reverse'],
      {flexDirection: ''}
    ],


    [
      ['flex', 'wrap'],
      {flexWrap: ''}
    ],
    [
      ['flex', 'nowrap'],
      {flexWrap: ''}
    ],
    [
      ['flex', 'wrap-reverse'],
      {flexWrap: ''}
    ],



    [
      ['flex', 'fill'],
      {flex: '1 1 auto'}
    ],



    [
      ['flex', 'grow-0'],
      {flexGrow: '0'}
    ],
    [
      ['flex', 'grow-1'],
      {flexGrow: '1'}
    ],
    [
      ['flex', 'shrink-0'],
      {flexShrink: '0'}
    ],
    [
      ['flex', 'shrink-1'],
      {flexShrink: '1'}
    ],



    [
      ['justify-content', 'start'],
      {justifyContent: 'flex-start'}
    ],
    [
      ['justify-content', 'end'],
      {justifyContent: 'flex-end'}
    ],
    [
      ['justify-content', 'center'],
      {justifyContent: ''}
    ],
    [
      ['justify-content', 'between'],
      {justifyContent: 'space-between'}
    ],
    [
      ['justify-content', 'around'],
      {justifyContent: 'space-around'}
    ],



    [
      ['align-content', 'start'],
      {alignContent: 'flex-start'}
    ],
    [
      ['align-content', 'end'],
      {alignContent: 'flex-end'}
    ],
    [
      ['align-content', 'center'],
      {alignContent: ''}
    ],
    [
      ['align-content', 'between'],
      {alignContent: 'space-between'}
    ],
    [
      ['align-content', 'around'],
      {alignContent: 'space-around'}
    ],



    [
      ['align-items', 'start'],
      {alignItems: 'flex-start'}
    ],
    [
      ['align-items', 'end'],
      {alignItems: 'flex-end'}
    ],
    [
      ['align-items', 'center'],
      {alignItems: ''}
    ],
    [
      ['align-items', 'baseline'],
      {alignItems: ''}
    ],
    [
      ['align-items', 'stretch'],
      {alignItems: ''}
    ],



    [
      ['align-self', 'start'],
      {alignSelf: 'flex-start'}
    ],
    [
      ['align-self', 'end'],
      {alignSelf: 'flex-end'}
    ],
    [
      ['align-self', 'center'],
      {alignSelf: ''}
    ],
    [
      ['align-self', 'baseline'],
      {alignSelf: ''}
    ],
    [
      ['align-self', 'stretch'],
      {alignSelf: ''}
    ],
    [
      ['align-self', 'auto'],
      {alignSelf: ''}
    ]
  ]

  rules.forEach(rule => {
    var
      selector = rule[0],
      properties = rule[1],
      value = selector[1],
      property = Object.keys(properties)[0]

    if (deviceRule) {
      selector[2] = selector[1]
      selector[1] = deviceRule
    }
    rule[0] = '.'+selector.join('-')
    if (properties[property] == '') {
      properties[property] = value
    }
    properties[property] += ' !important'
  })
  
  return rules
}