///////////////////////////////////////////////////////////////////////////////
//
// Simulate an activerecord-like model class
// in general JavaScript is a class-less language. Everything is an object.
// http://www.phpied.com/3-ways-to-define-a-javascript-class/
//
///////////////////////////////////////////////////////////////////////////////

function Model(table){
  "use strict";

  if (this.constructor == Model) {
    var _table = localStorage.getObject(table);
    if (_table == null) {
      localStorage.setObject(table, {});
    }
  }

  this.all = function(){
    return localStorage.getObject(table);
  }

  this.find = function(id){
    var object = localStorage.getObject(table)[id];
    if (object == null) {
      return {};
    } else {
      return localStorage.getObject(table)[id];
    }
  }

  this.first = function(){
    var _table = localStorage.getObject(table);
    for (var o in _table)
    {
      return _table[o];
    }
  }

  this.last = function(){
    var _table  = localStorage.getObject(table);
    var _return = "";
    for (var o in _table)
    {
      _return = _table[o];
    }
    return _return;
  }

  this.where = function(obj,options){
    var _table = localStorage.getObject(table);
    var returnData = {};

    for (var t in _table)
    {
      var checkSum   = [];
      var checkCount = 0;

      for (var o in obj)
      {
        switch(typeof obj[o])
        {
          // TODO: add case sensitive/insensitive switch with option marker. default to sensitive.
          case 'string':
            if (_table[t][o] != null && eval('_table[t][o].search(/' + obj[o] + '/)') > -1)
            {
              checkSum.push(true);
            }
            break;
          case 'number':
            if (_table[t][o] != null && _table[t][o] == obj[o])
            {
              checkSum.push(true);
            }
            break;
          case 'object':
            var dateLookup = new Date(_table[t][o]).getTime();
            var dateNow    = new Date().getTime();

            // TODO: replace with eval
            switch (options[o])
            {
              case '>':
                if (dateLookup > dateNow)
                {
                  checkSum.push(true);
                }
                break;
              case '<':
                if (dateLookup < dateNow)
                {
                  checkSum.push(true);
                }
                break;
              case '>=':
                if (dateLookup >= dateNow)
                {
                  checkSum.push(true);
                }
                break;
              case '<=':
                if (dateLookup <= dateNow)
                {
                  checkSum.push(true);
                }
                break;
              default:
                if (dateLookup == dateNow)
                {
                  checkSum.push(true);
                }
            }
            break;
          case 'boolean':
            if (_table[t][o] != null && _table[t][o] == obj[o])
            {
              checkSum.push(true);
            }
            break;
          case 'null':
            if (_table[t][o] == null)
            {
              checkSum.push(true);
            }
            break;
          default:

        }
        checkCount++;
      }
      if (checkSum.length == checkCount && checkSum.indexOf(true) >= 0 && checkSum.indexOf(false) == -1)
      {
        returnData[t] = _table[t];
      }
    }
    return returnData;
  }

  this.create = function(obj){
    var _table = localStorage.getObject(table);
    _table[obj.id] = obj;
    localStorage.setObject(table, _table);
  }

  this.update = function(obj){
    var _table = localStorage.getObject(table);

    for (var key in obj) {
      var value = obj[key];
      if (isNumber(value)) {
        value = parseInt(value);
      }
      _table[obj.id][key] = value;
    }
    localStorage.setObject(table, _table);
  }

  this.destroy = function(id){
    var _table = localStorage.getObject(table);
    delete _table[id];
    localStorage.setObject(table, _table);
  }

  this.destroy_all = function(){
    localStorage.setItem(table, '{}');
  }
}

if (!Object.keys) {
  Object.keys = function (obj){
    "use strict";
    var keys = [];

    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k))
      {
        keys.push(k);
      }
    }
    return keys;
  };
}

function count(object){
  return Object.keys(object).length
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// FIXME: extend: Object #<Object>
Object.count = function(){ return Object.keys(this).length }

if (window.Storage){
  Storage.prototype.setObject = function(key, value) {
    "use strict";
    if (value == null) {
      this.setItem(key, JSON.stringify({}));
    } else {
      this.setItem(key, JSON.stringify(value));
    }
  };

  Storage.prototype.getObject = function(key) {
    "use strict";
    var value = this.getItem(key);
    return value && JSON.parse(value);
  };
} else {
  alert('localStorage is not supported on this browser')
}