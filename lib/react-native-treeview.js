'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var TreeView = (function (_React$PureComponent) {
  _inherits(TreeView, _React$PureComponent);

  function TreeView(props) {
    _classCallCheck(this, TreeView);

    _get(Object.getPrototypeOf(TreeView.prototype), 'constructor', this).call(this, props);

    var collapsed = props.defaultCollapsed === true;
    this.state = {
      collapsed: collapsed,
      rotateAnimation: new _reactNative.Animated.Value(!collapsed ? 0 : 90)
    };
    this.handleClick = this.handleClick.bind(this);
    this.rotateArrow = this.rotateArrow.bind(this);
  }

  _createClass(TreeView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.collapsed !== this.state.collapsed) this.rotateArrow();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.rotateArrow();
      if (this.props.onClick) {
        var _props;

        (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'rotateArrow',
    value: function rotateArrow() {
      var _state = this.state;
      var collapsed = _state.collapsed;
      var rotateAnimation = _state.rotateAnimation;

      _reactNative.Animated.timing(rotateAnimation, {
        toValue: !collapsed ? 90 : 0,
        duration: 250
      }).start();
      this.setState({
        collapsed: !collapsed
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var _props2$collapsed = _props2.collapsed;
      var collapsed = _props2$collapsed === undefined ? this.state.collapsed : _props2$collapsed;
      var _props2$arrowIcon = _props2.arrowIcon;
      var arrowIcon = _props2$arrowIcon === undefined ? _react2['default'].createElement(
        _reactNative.Text,
        null,
        '▾'
      ) : _props2$arrowIcon;
      var arrowStyle = _props2.arrowStyle;
      var itemStyle = _props2.itemStyle;
      var treeViewStyle = _props2.treeViewStyle;
      var childrenStyle = _props2.childrenStyle;
      var nodeLabel = _props2.nodeLabel;
      var children = _props2.children;
      var defaultCollapsed = _props2.defaultCollapsed;

      var rest = _objectWithoutProperties(_props2, ['collapsed', 'arrowIcon', 'arrowStyle', 'itemStyle', 'treeViewStyle', 'childrenStyle', 'nodeLabel', 'children', 'defaultCollapsed']);

      var rotateAnimation = this.state.rotateAnimation;

      var rotate = rotateAnimation.interpolate({
        inputRange: [0, 90],
        outputRange: ['0deg', '-90deg']
      });

      var arrow = _react2['default'].createElement(
        _reactNative.TouchableOpacity,
        { onPress: this.handleClick },
        _react2['default'].createElement(
          _reactNative.Animated.View,
          _extends({}, rest, {
            style: [{ marginRight: 6, transform: [{ rotate: rotate }] }, arrowStyle]
          }),
          arrowIcon
        )
      );

      return _react2['default'].createElement(
        _reactNative.View,
        { style: [{ overflow: 'hidden' }, treeViewStyle] },
        _react2['default'].createElement(
          _reactNative.View,
          {
            style: [{ flexDirection: 'row', alignItems: 'center' }, itemStyle]
          },
          arrow,
          nodeLabel
        ),
        _react2['default'].createElement(
          _reactNative.View,
          {
            style: [collapsed ? { height: 0 } : { marginLeft: 16 }, childrenStyle]
          },
          collapsed ? null : children
        )
      );
    }
  }]);

  return TreeView;
})(_react2['default'].PureComponent);

exports['default'] = TreeView;
module.exports = exports['default'];