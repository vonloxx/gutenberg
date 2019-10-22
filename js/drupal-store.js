/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  function registerDrupalStore(data) {
    var registerStore = data.registerStore,
        dispatch = data.dispatch;


    var DEFAULT_STATE = {
      blocks: {},
      mediaEntities: {}
    };

    return registerStore('drupal', {
      reducer: function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
        var action = arguments[1];

        switch (action.type) {
          case 'SET_BLOCK':
            return _extends({}, state, {
              blocks: _extends({}, state.blocks, _defineProperty({}, action.item, action.block))
            });
          case 'SET_MEDIA_ENTITY':
            return _extends({}, state, {
              mediaEntities: _extends({}, state.mediaEntities, _defineProperty({}, action.ids, action.mediaEntity))
            });
          default:
            return state;
        }
      },


      actions: {
        setBlock: function setBlock(item, block) {
          return {
            type: 'SET_BLOCK',
            item: item,
            block: block
          };
        },
        setMediaEntities: function setMediaEntities(ids, mediaEntity) {
          return {
            type: 'SET_MEDIA_ENTITY',
            ids: ids,
            mediaEntity: mediaEntity
          };
        }
      },

      selectors: {
        getBlock: function getBlock(state, item) {
          var blocks = state.blocks;

          var block = blocks[item];

          return block;
        },
        getMediaEntities: function getMediaEntities(state, item) {
          var mediaEntities = state.mediaEntities;

          return mediaEntities[item];
        }
      },

      resolvers: {
        getBlock: function getBlock(item) {
          var _this = this;

          return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var response, block;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('\n            ' + drupalSettings.path.baseUrl + 'editor/blocks/load/' + item + '\n          ');

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();

                  case 5:
                    block = _context.sent;

                    dispatch('drupal').setBlock(item, block);
                    return _context.abrupt('return', {
                      type: 'GET_BLOCK',
                      item: item,
                      block: block
                    });

                  case 8:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }))();
        },
        getMediaEntities: function getMediaEntities(mediaEntityIds) {
          var _this2 = this;

          return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var ids, response, entity;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ids = mediaEntityIds.join(',');
                    _context2.next = 3;
                    return fetch('\n            ' + drupalSettings.path.baseUrl + 'editor/media/render/' + ids + '\n          ');

                  case 3:
                    response = _context2.sent;

                    if (!response.ok) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.next = 7;
                    return response.json();

                  case 7:
                    entity = _context2.sent;

                    dispatch('drupal').setMediaEntities(ids, entity);
                    return _context2.abrupt('return', entity);

                  case 10:
                    if (!(response.status === 404)) {
                      _context2.next = 13;
                      break;
                    }

                    Drupal.notifyError("Media entity couldn't be found.");
                    return _context2.abrupt('return', null);

                  case 13:
                    if (response.ok) {
                      _context2.next = 16;
                      break;
                    }

                    Drupal.notifyError("An error occurred while fetching data.");
                    return _context2.abrupt('return', null);

                  case 16:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }))();
        }
      }
    });
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalStore = registerDrupalStore;
})();