/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (wp, Drupal, DrupalGutenberg, drupalSettings) {
  var data = wp.data,
      components = wp.components,
      element = wp.element,
      editor = wp.editor;
  var select = data.select;
  var Component = element.Component,
      Fragment = element.Fragment;
  var MediaBrowserDetails = DrupalGutenberg.Components.MediaBrowserDetails;
  var Button = components.Button,
      FormFileUpload = components.FormFileUpload;
  var mediaUpload = editor.mediaUpload;


  var __ = Drupal.t;

  function MediaBrowserThumbnail(props) {
    var mediaType = props.mediaType,
        filename = props.filename,
        url = props.url;


    return React.createElement(
      Fragment,
      null,
      mediaType === 'image' && React.createElement(
        'div',
        { className: 'center' },
        React.createElement('img', { alt: filename, src: url })
      ),
      mediaType !== 'image' && React.createElement(
        'div',
        { className: 'filename' },
        filename
      )
    );
  }

  var MediaBrowser = function (_Component) {
    _inherits(MediaBrowser, _Component);

    function MediaBrowser() {
      _classCallCheck(this, MediaBrowser);

      var _this = _possibleConstructorReturn(this, (MediaBrowser.__proto__ || Object.getPrototypeOf(MediaBrowser)).apply(this, arguments));

      _this.state = {
        data: [],
        selected: {},
        active: null,
        search: ''
      };
      _this.uploadFromFiles = _this.uploadFromFiles.bind(_this);
      _this.addFiles = _this.addFiles.bind(_this);
      _this.selectMedia = _this.selectMedia.bind(_this);
      _this.canToggle = _this.canToggle.bind(_this);
      _this.toggleMedia = _this.toggleMedia.bind(_this);
      return _this;
    }

    _createClass(MediaBrowser, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.getMediaFiles();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            multiple = _props.multiple,
            value = _props.value;

        var selected = {} && (multiple && value ? _extends({}, value.reduce(function (result, item) {
          result[item] = true;
          return result;
        }, {})) : _defineProperty({}, value, true));

        this.setState({
          selected: selected,
          active: Object.keys(selected)[0]
        });
      }
    }, {
      key: 'getMediaFiles',
      value: function getMediaFiles() {
        var _this2 = this;

        var allowedTypes = this.props.allowedTypes;


        fetch('\n        ' + drupalSettings.path.baseUrl + 'editor/media/search/' + allowedTypes.join('+') + '/*').then(function (response) {
          return response.json();
        }).then(function (json) {
          _this2.setState({ data: json });
        });
      }
    }, {
      key: 'uploadFromFiles',
      value: function uploadFromFiles(event) {
        var multiple = this.props.multiple;

        this.addFiles(event.target.files);
      }
    }, {
      key: 'addFiles',
      value: function addFiles(files) {
        var _this3 = this;

        var allowedTypes = this.props.allowedTypes;
        var data = this.state.data;


        mediaUpload({
          allowedTypes: allowedTypes,
          filesList: files,
          onFileChange: function onFileChange(files) {
            _this3.getMediaFiles();
          }
        });
      }
    }, {
      key: 'selectMedia',
      value: function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _this4 = this;

          var _state, selected, data, onSelect, medias;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _state = this.state, selected = _state.selected, data = _state.data;
                  onSelect = this.props.onSelect;
                  medias = data.filter(function (item) {
                    return selected[item.id];
                  });


                  medias.map(function () {
                    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(media) {
                      var result;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return fetch(drupalSettings.path.baseUrl + 'editor/media/update_data/' + media.id, {
                                method: 'post',
                                body: JSON.stringify({
                                  title: media.title,
                                  caption: media.caption,
                                  alt_text: media.alt
                                })
                              });

                            case 2:
                              result = _context.sent;

                            case 3:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this4);
                    }));

                    return function (_x) {
                      return _ref3.apply(this, arguments);
                    };
                  }());

                  onSelect(medias);

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function selectMedia() {
          return _ref2.apply(this, arguments);
        }

        return selectMedia;
      }()
    }, {
      key: 'canToggle',
      value: function canToggle(ev, id) {
        var multiple = this.props.multiple;
        var selected = this.state.selected;


        this.setState({ active: id });

        if (multiple && selected[id]) {
          ev.preventDefault();
        }

        return true;
      }
    }, {
      key: 'toggleMedia',
      value: function toggleMedia(ev, id) {
        var selected = this.state.selected;
        var multiple = this.props.multiple;

        this.setState({ active: id });

        if (multiple) {
          this.setState({
            selected: _extends({}, selected, _defineProperty({}, id, ev.target.checked))
          });
        } else {
          this.setState({
            selected: _defineProperty({}, id, ev.target.checked)
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;

        var _state2 = this.state,
            data = _state2.data,
            selected = _state2.selected,
            active = _state2.active,
            search = _state2.search;
        var multiple = this.props.multiple;


        var getMedia = function getMedia(id) {
          return data.filter(function (item) {
            return item.id === id;
          })[0];
        };
        var activeMedia = getMedia(active);

        function updateMedia(attributes) {
          var title = attributes.title,
              altText = attributes.altText,
              caption = attributes.caption;


          activeMedia.title = title;

          if (caption) {
            activeMedia.caption = caption;
          }

          activeMedia.alt_text = altText;
          activeMedia.alt = altText;
        }

        return React.createElement(
          'div',
          { className: 'media-browser' },
          React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
              'div',
              { className: 'toolbar' },
              React.createElement(
                'div',
                { className: 'form-item' },
                React.createElement('input', {
                  name: 'media-browser-search',
                  className: 'text-full',
                  placeHolder: __('Search'),
                  type: 'text',
                  onChange: function onChange(value) {
                    _this5.setState({ search: value.target.value.toLowerCase() });
                  }
                })
              )
            ),
            React.createElement(
              'ul',
              { className: 'list' },
              data.filter(function (item) {
                return item.media_details.file.toLowerCase().includes(search) || item.title.raw && item.title.raw.toLowerCase().includes(search);
              }).map(function (media) {
                return React.createElement(
                  'li',
                  {
                    className: 'item ' + (active === media.id ? 'selected' : '')
                  },
                  React.createElement(
                    'label',
                    {
                      'for': 'media-browser-selector-' + media.id,
                      className: 'thumbnail ' + media.media_type,
                      onClick: function onClick(ev) {
                        return _this5.canToggle(ev, media.id);
                      }
                    },
                    React.createElement(MediaBrowserThumbnail, {
                      mediaType: media.media_type,
                      url: media.media_details.sizes && media.media_details.sizes.large ? media.media_details.sizes.large.source_url : media.source_url,
                      filename: media.media_details.file
                    })
                  ),
                  React.createElement('input', {
                    id: 'media-browser-selector-' + media.id,
                    name: 'media-browser-selector',
                    onClick: function onClick(ev) {
                      return _this5.toggleMedia(ev, media.id);
                    },
                    type: multiple ? 'checkbox' : 'radio',
                    checked: selected[media.id]
                  })
                );
              })
            ),
            React.createElement(
              'div',
              { className: 'details' },
              activeMedia && React.createElement(
                Fragment,
                null,
                React.createElement(
                  'h2',
                  null,
                  __('Media details')
                ),
                React.createElement(MediaBrowserDetails, {
                  key: activeMedia.id,
                  onChange: updateMedia,
                  media: activeMedia
                })
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-actions' },
            multiple && React.createElement(
              'div',
              { className: 'selected-summary' },
              __('Total selected') + ': ' + Object.values(selected).filter(function (item) {
                return item;
              }).length
            ),
            React.createElement(
              'div',
              { className: 'buttons' },
              React.createElement(
                FormFileUpload,
                {
                  isLarge: true,
                  className: 'editor-media-placeholder__button',
                  onChange: this.uploadFromFiles,
                  accept: 'image',
                  multiple: multiple
                },
                __('Upload')
              ),
              React.createElement(
                Button,
                { isLarge: true, isPrimary: true, onClick: this.selectMedia },
                __('Select')
              )
            )
          )
        );
      }
    }]);

    return MediaBrowser;
  }(Component);

  MediaBrowser.defaultProps = {
    allowedTypes: ['image']
  };

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.MediaBrowser = MediaBrowser;
})(wp, Drupal, DrupalGutenberg, drupalSettings);