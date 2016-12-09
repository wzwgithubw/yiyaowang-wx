"use strict";var exports=module.exports={};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAction;

var _identity = require('../../lodash/identity.js');

var _identity2 = _interopRequireDefault(_identity);

var _isFunction = require('../../lodash/isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isUndefined = require('../../lodash/isUndefined.js');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = require('../../lodash/isNull.js');

var _isNull2 = _interopRequireDefault(_isNull);

var _invariant = require('../../invariant/browser.js');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createAction(type) {
  var payloadCreator = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
  var metaCreator = arguments[2];

  (0, _invariant2.default)((0, _isFunction2.default)(payloadCreator) || (0, _isNull2.default)(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');

  var finalPayloadCreator = (0, _isNull2.default)(payloadCreator) ? _identity2.default : payloadCreator;

  var actionCreator = function actionCreator() {
    var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

    var action = {
      type: type
    };

    var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalPayloadCreator.apply(undefined, arguments);
    if (!(0, _isUndefined2.default)(payload)) {
      action.payload = payload;
    }

    if (hasError || payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if ((0, _isFunction2.default)(metaCreator)) {
      action.meta = metaCreator.apply(undefined, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return type.toString();
  };

  return actionCreator;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUFjdGlvbi5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJjcmVhdGVBY3Rpb24iLCJfaWRlbnRpdHkiLCJyZXF1aXJlIiwiX2lkZW50aXR5MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaXNGdW5jdGlvbiIsIl9pc0Z1bmN0aW9uMiIsIl9pc1VuZGVmaW5lZCIsIl9pc1VuZGVmaW5lZDIiLCJfaXNOdWxsIiwiX2lzTnVsbDIiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJvYmoiLCJfX2VzTW9kdWxlIiwidHlwZSIsInBheWxvYWRDcmVhdG9yIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibWV0YUNyZWF0b3IiLCJmaW5hbFBheWxvYWRDcmVhdG9yIiwiYWN0aW9uQ3JlYXRvciIsImhhc0Vycm9yIiwiRXJyb3IiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYXBwbHkiLCJlcnJvciIsIm1ldGEiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDQyxTQUFPO0FBRG9DLENBQTdDO0FBR0FELFFBQVFFLE9BQVIsR0FBa0JDLFlBQWxCOztBQUVBLElBQUlDLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7O0FBRUEsSUFBSUMsYUFBYUMsdUJBQXVCSCxTQUF2QixDQUFqQjs7QUFFQSxJQUFJSSxjQUFjSCxRQUFRLG1CQUFSLENBQWxCOztBQUVBLElBQUlJLGVBQWVGLHVCQUF1QkMsV0FBdkIsQ0FBbkI7O0FBRUEsSUFBSUUsZUFBZUwsUUFBUSxvQkFBUixDQUFuQjs7QUFFQSxJQUFJTSxnQkFBZ0JKLHVCQUF1QkcsWUFBdkIsQ0FBcEI7O0FBRUEsSUFBSUUsVUFBVVAsUUFBUSxlQUFSLENBQWQ7O0FBRUEsSUFBSVEsV0FBV04sdUJBQXVCSyxPQUF2QixDQUFmOztBQUVBLElBQUlFLGFBQWFULFFBQVEsV0FBUixDQUFqQjs7QUFFQSxJQUFJVSxjQUFjUix1QkFBdUJPLFVBQXZCLENBQWxCOztBQUVBLFNBQVNQLHNCQUFULENBQWdDUyxHQUFoQyxFQUFxQztBQUFFLFNBQU9BLE9BQU9BLElBQUlDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCLEVBQUVkLFNBQVNjLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFNBQVNiLFlBQVQsQ0FBc0JlLElBQXRCLEVBQTRCO0FBQzFCLE1BQUlDLGlCQUFpQkMsVUFBVUMsTUFBVixJQUFvQixDQUFwQixJQUF5QkQsVUFBVSxDQUFWLE1BQWlCRSxTQUExQyxHQUFzRGhCLFdBQVdKLE9BQWpFLEdBQTJFa0IsVUFBVSxDQUFWLENBQWhHO0FBQ0EsTUFBSUcsY0FBY0gsVUFBVSxDQUFWLENBQWxCOztBQUVBLEdBQUMsR0FBR0wsWUFBWWIsT0FBaEIsRUFBeUIsQ0FBQyxHQUFHTyxhQUFhUCxPQUFqQixFQUEwQmlCLGNBQTFCLEtBQTZDLENBQUMsR0FBR04sU0FBU1gsT0FBYixFQUFzQmlCLGNBQXRCLENBQXRFLEVBQTZHLDZEQUE3Rzs7QUFFQSxNQUFJSyxzQkFBc0IsQ0FBQyxHQUFHWCxTQUFTWCxPQUFiLEVBQXNCaUIsY0FBdEIsSUFBd0NiLFdBQVdKLE9BQW5ELEdBQTZEaUIsY0FBdkY7O0FBRUEsTUFBSU0sZ0JBQWdCLFNBQVNBLGFBQVQsR0FBeUI7QUFDM0MsUUFBSUMsV0FBVyxDQUFDTixVQUFVQyxNQUFWLElBQW9CLENBQXBCLEdBQXdCQyxTQUF4QixHQUFvQ0YsVUFBVSxDQUFWLENBQXJDLGFBQThETyxLQUE3RTs7QUFFQSxRQUFJQyxTQUFTO0FBQ1hWLFlBQU1BO0FBREssS0FBYjs7QUFJQSxRQUFJVyxVQUFVSCxXQUFXTixVQUFVQyxNQUFWLElBQW9CLENBQXBCLEdBQXdCQyxTQUF4QixHQUFvQ0YsVUFBVSxDQUFWLENBQS9DLEdBQThESSxvQkFBb0JNLEtBQXBCLENBQTBCUixTQUExQixFQUFxQ0YsU0FBckMsQ0FBNUU7QUFDQSxRQUFJLENBQUMsQ0FBQyxHQUFHVCxjQUFjVCxPQUFsQixFQUEyQjJCLE9BQTNCLENBQUwsRUFBMEM7QUFDeENELGFBQU9DLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0Q7O0FBRUQsUUFBSUgsWUFBWUcsbUJBQW1CRixLQUFuQyxFQUEwQztBQUN4QztBQUNBQyxhQUFPRyxLQUFQLEdBQWUsSUFBZjtBQUNEOztBQUVELFFBQUksQ0FBQyxHQUFHdEIsYUFBYVAsT0FBakIsRUFBMEJxQixXQUExQixDQUFKLEVBQTRDO0FBQzFDSyxhQUFPSSxJQUFQLEdBQWNULFlBQVlPLEtBQVosQ0FBa0JSLFNBQWxCLEVBQTZCRixTQUE3QixDQUFkO0FBQ0Q7O0FBRUQsV0FBT1EsTUFBUDtBQUNELEdBdEJEOztBQXdCQUgsZ0JBQWNRLFFBQWQsR0FBeUIsWUFBWTtBQUNuQyxXQUFPZixLQUFLZSxRQUFMLEVBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU9SLGFBQVA7QUFDRCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQWN0aW9uO1xuXG52YXIgX2lkZW50aXR5ID0gcmVxdWlyZSgnbG9kYXNoL2lkZW50aXR5Jyk7XG5cbnZhciBfaWRlbnRpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWRlbnRpdHkpO1xuXG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xuXG52YXIgX2lzRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNGdW5jdGlvbik7XG5cbnZhciBfaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcblxudmFyIF9pc1VuZGVmaW5lZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1VuZGVmaW5lZCk7XG5cbnZhciBfaXNOdWxsID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVsbCcpO1xuXG52YXIgX2lzTnVsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc051bGwpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSkge1xuICB2YXIgcGF5bG9hZENyZWF0b3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfaWRlbnRpdHkyLmRlZmF1bHQgOiBhcmd1bWVudHNbMV07XG4gIHZhciBtZXRhQ3JlYXRvciA9IGFyZ3VtZW50c1syXTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc0Z1bmN0aW9uMi5kZWZhdWx0KShwYXlsb2FkQ3JlYXRvcikgfHwgKDAsIF9pc051bGwyLmRlZmF1bHQpKHBheWxvYWRDcmVhdG9yKSwgJ0V4cGVjdGVkIHBheWxvYWRDcmVhdG9yIHRvIGJlIGEgZnVuY3Rpb24sIHVuZGVmaW5lZCBvciBudWxsJyk7XG5cbiAgdmFyIGZpbmFsUGF5bG9hZENyZWF0b3IgPSAoMCwgX2lzTnVsbDIuZGVmYXVsdCkocGF5bG9hZENyZWF0b3IpID8gX2lkZW50aXR5Mi5kZWZhdWx0IDogcGF5bG9hZENyZWF0b3I7XG5cbiAgdmFyIGFjdGlvbkNyZWF0b3IgPSBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKCkge1xuICAgIHZhciBoYXNFcnJvciA9IChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pIGluc3RhbmNlb2YgRXJyb3I7XG5cbiAgICB2YXIgYWN0aW9uID0ge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH07XG5cbiAgICB2YXIgcGF5bG9hZCA9IGhhc0Vycm9yID8gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdIDogZmluYWxQYXlsb2FkQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCEoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KShwYXlsb2FkKSkge1xuICAgICAgYWN0aW9uLnBheWxvYWQgPSBwYXlsb2FkO1xuICAgIH1cblxuICAgIGlmIChoYXNFcnJvciB8fCBwYXlsb2FkIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBGU0EgZXJyb3JzIHdoZXJlIHRoZSBwYXlsb2FkIGlzIGFuIEVycm9yIG9iamVjdC4gU2V0IGVycm9yLlxuICAgICAgYWN0aW9uLmVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoKDAsIF9pc0Z1bmN0aW9uMi5kZWZhdWx0KShtZXRhQ3JlYXRvcikpIHtcbiAgICAgIGFjdGlvbi5tZXRhID0gbWV0YUNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH07XG5cbiAgYWN0aW9uQ3JlYXRvci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZS50b1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBhY3Rpb25DcmVhdG9yO1xufSJdfQ==