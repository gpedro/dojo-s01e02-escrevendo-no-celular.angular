'use strict';
/* global celularNumero: true */
function celularNumero(texto) {

  var lastGroup;
  var mapping = {
      'ABC'  : '2',
      'DEF'  : '3',
      'GHI'  : '4',
      'JKL'  : '5',
      'MNO'  : '6',
      'PQRS' : '7',
      'TUV'  : '8',
      'WXYZ' : '9',
      ' '    : '0',
      ''     : '_'
  };

  var convertCharToNumeric = function (char) {
    var keys = Object.keys(mapping);
    var result = '';
    for (var keyIndex in keys) {
      var key = keys[keyIndex];
      var value = mapping[key];

      var pos = key.indexOf(char);
      if (pos !== -1) {
        if (lastGroup !== undefined && lastGroup === value) {
          result += '_';
        }

        result += Array(key.indexOf(char) + 2).join(value);
        lastGroup = value;
        break;
      }

    }

    return result;

  };

  var result = '';
  for (var i = 0; i <= (texto.length - 1); i++) {
    var char = texto.charAt(i);
    result += convertCharToNumeric(char);
  }

  return result;
}
