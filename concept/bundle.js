"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// CLASS
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.user = 'Rafael';
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List);

var MyList = new TodoList();

document.getElementById('button').onclick = function () {
  MyList.add('New value');
};

MyList.showUser(); // method static 
// do not need to instantiate and function depends only on it

var Matha = /*#__PURE__*/function () {
  function Matha() {
    _classCallCheck(this, Matha);
  }

  _createClass(Matha, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matha;
}();

console.log(Matha.soma(5, 10)); // const is allowed only mutation

var user = {
  name: 'Rafael'
};
user.name = 'Julia';
console.log(user); // ARRAY OPERATIONS

var array = [1, 3, 5, 4, 6, 8, 9];
var newArray = array.map(function (item, index) {
  return item + index;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = array.find(function (item) {
  return item === 4;
});
console.log(find); // VALUES DEFAULTS

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
}; // with arrow function


var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(soma(1));
console.log(soma()); // ARROW FUNCTIONS 

var pair = [2, 4, 6, 8, 10];
var squadPair = pair.map(function (item) {
  return Math.pow(item, 2);
}); // another way

var squadPair2 = pair.map(function (item) {
  return Math.pow(item, 2);
});
console.log(squadPair);

var test = function test() {
  return 'teste';
};

var test2 = function test2() {
  return 'teste';
};

console.log(test()); // DISRUPTION

var username = {
  name: 'Rafael',
  year: 20,
  address: {
    street: 'Walfredo Macedo',
    neightboard: 'Quarenta',
    number: 564
  }
}; // const name1 = username.name;
// const year1 = username.year
// const street1 = username.address.street;

var name = username.name,
    year = username.year,
    _username$address = username.address,
    street = _username$address.street,
    number = _username$address.number;
console.log("".concat(street, " - ").concat(number));

function showUsername(_ref) {
  var name = _ref.name,
      year = _ref.year,
      neightboard = _ref.address.neightboard;
  return "".concat(name, " - ").concat(neightboard);
}

console.log(showUsername(username)); // REST OPERATOR 

var company2 = {
  company: 'Google',
  description: 'Good company',
  skills: 'Web'
};

var company = company2.company,
    rest = _objectWithoutProperties(company2, ["company"]);

console.log(rest);
var numbers = [1, 2, 3, 4, 5, 6];
var a = numbers[0],
    b = numbers[1],
    c = numbers.slice(2);

function sumMoreOne() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.map(function (number) {
    return number + 1;
  });
}

console.log(sumMoreOne(1, 2, 3, 4)); // SPREAD OPERATOR

var array1 = [1, 2, 4];
var array2 = [5, 6, 8];
var array3 = [].concat(array1, array2);
console.log(array3);
var company3 = {
  nameCompany: 'Google',
  description1: 'Good company',
  skills1: 'Web'
};

var copyCompany = _objectSpread(_objectSpread({}, company3), {}, {
  skills1: 'Design'
});

console.log(copyCompany); // OBJECT SHORT SYNTAX

var nameGuest = 'Rafael';
var yearGuest = 20;
var guest = {
  nameGuest: nameGuest,
  yearGuest: yearGuest,
  code: '1404'
};
console.log(guest);
