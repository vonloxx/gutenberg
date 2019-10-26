/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (wp, $, Drupal, DrupalGutenberg, drupalSettings) {
  var element = wp.element,
      blockEditor = wp.blockEditor,
      components = wp.components,
      data = wp.data;
  var Placeholder = components.Placeholder,
      Button = components.Button,
      FormFileUpload = components.FormFileUpload,
      SelectControl = components.SelectControl,
      IconButton = components.IconButton,
      PanelBody = components.PanelBody;
  var BlockIcon = blockEditor.BlockIcon,
      MediaUpload = blockEditor.MediaUpload,
      InspectorControls = blockEditor.InspectorControls;
  var Component = element.Component,
      Fragment = element.Fragment;
  var DrupalIcon = DrupalGutenberg.Components.DrupalIcon;

  var __ = Drupal.t;
  var withSelect = data.withSelect;

  var DrupalMediaEntity = function (_Component) {
    _inherits(DrupalMediaEntity, _Component);

    function DrupalMediaEntity() {
      _classCallCheck(this, DrupalMediaEntity);

      var _this = _possibleConstructorReturn(this, (DrupalMediaEntity.__proto__ || Object.getPrototypeOf(DrupalMediaEntity)).apply(this, arguments));

      _this.state = {
        value: ''
      };
      _this.insertMedia = _this.insertMedia.bind(_this);
      _this.onUpload = _this.onUpload.bind(_this);
      _this.changeViewMode = _this.changeViewMode.bind(_this);
      return _this;
    }

    _createClass(DrupalMediaEntity, [{
      key: 'insertMedia',
      value: function insertMedia(mediaEntityId) {
        this.props.setAttributes({
          mediaEntityIds: [mediaEntityId]
        });
      }
    }, {
      key: 'onUpload',
      value: function onUpload(event) {
        var _this2 = this;

        var _props = this.props,
            allowedTypes = _props.allowedTypes,
            mediaUpload = _props.mediaUpload,
            onError = _props.onError;


        mediaUpload({
          allowedTypes: allowedTypes,
          filesList: event.target.files,
          onError: onError,
          onFileChange: function onFileChange(fileData) {
            if (fileData && fileData[0] && fileData[0].media_entity && fileData[0].media_entity.id) {
              _this2.insertMedia([fileData[0].media_entity.id]);
            }
          }
        });
      }
    }, {
      key: 'changeViewMode',
      value: function changeViewMode(viewMode) {
        this.props.setAttributes({
          viewMode: viewMode
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props2 = this.props,
            className = _props2.className,
            isMediaLibraryEnabled = _props2.isMediaLibraryEnabled,
            mediaContent = _props2.mediaContent,
            mediaViewModes = _props2.mediaViewModes,
            attributes = _props2.attributes;

        var instructions = __('Upload a media file or pick one from your media library.');
        var placeholderClassName = ['block-editor-media-placeholder', 'editor-media-placeholder', className].join(' ');

        if (Array.isArray(mediaViewModes) && mediaViewModes.length) {
          var inspectorControls = React.createElement(
            InspectorControls,
            null,
            React.createElement(
              PanelBody,
              { title: __('Media entity settings') },
              React.createElement(SelectControl, { label: __('View mode'),
                value: attributes.viewMode,
                options: mediaViewModes,
                onChange: this.changeViewMode })
            )
          );

          var html = mediaContent.default.processedHtml;
          if (mediaContent[attributes.viewMode]) {
            html = mediaContent[attributes.viewMode].processedHtml;
          }

          return React.createElement(
            Fragment,
            null,
            React.createElement('div', { dangerouslySetInnerHTML: { __html: html } }),
            inspectorControls
          );
        }

        var content = isMediaLibraryEnabled ? React.createElement(MediaUpload, { onSelect: this.insertMedia,
          allowedTypes: ['image', 'video', 'audio', 'application'],
          multiple: false,
          handlesMediaEntity: true }) : React.createElement(
          Fragment,
          null,
          React.createElement('input', { type: 'text',
            value: this.state.value,
            onChange: function onChange(e) {
              return _this3.setState({ value: e.target.value });
            } }),
          React.createElement(
            Button,
            { isLarge: true,
              isPrimary: true,
              title: __('Insert'),
              onClick: function onClick() {
                return _this3.insertMedia([_this3.state.value]);
              } },
            __('Insert')
          )
        );

        return React.createElement(
          Placeholder,
          { icon: React.createElement(BlockIcon, { icon: DrupalIcon }),
            label: __('Drupal Media Entity'),
            instructions: instructions,
            className: placeholderClassName },
          React.createElement(FormFileUpload, { onChange: this.onUpload,
            accept: "image/*,video/*,audio/*,application/*",
            multiple: false,
            render: function render(_ref) {
              var openFileDialog = _ref.openFileDialog;

              return React.createElement(
                Fragment,
                null,
                React.createElement(
                  IconButton,
                  { isLarge: true,
                    onClick: openFileDialog,
                    className: ['block-editor-media-placeholder__button', 'editor-media-placeholder__button', 'block-editor-media-placeholder__upload-button'].join(' '),
                    icon: 'upload' },
                  __('Upload')
                )
              );
            }
          }),
          content
        );
      }
    }]);

    return DrupalMediaEntity;
  }(Component);

  var createClass = withSelect(function (select, props) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    var _select2 = select('drupal'),
        getMediaEntity = _select2.getMediaEntity;

    var attributes = props.attributes;

    var mediaEntityIds = attributes.mediaEntityIds || [];

    var defaultData = {
      mediaContent: {},
      mediaViewModes: [],
      mediaUpload: getSettings().__experimentalMediaUpload
    };

    if (!mediaEntityIds.length) {
      return defaultData;
    }

    var mediaEntity = getMediaEntity(mediaEntityIds[0]);

    if (!mediaEntity) {
      return defaultData;
    }

    var mediaViewModes = [];

    if (Object.keys(mediaEntity).length) {
      for (var viewMode in mediaEntity) {
        if (!mediaEntity.hasOwnProperty(viewMode)) {
          continue;
        }

        mediaViewModes.push({
          value: mediaEntity[viewMode]['view_mode'],
          label: mediaEntity[viewMode]['view_mode_name']
        });

        var node = document.createElement('div');
        node.innerHTML = mediaEntity[viewMode].html;
        var formElements = node.querySelectorAll('input, select, button, textarea, a');
        formElements.forEach(function (element) {
          element.setAttribute('readonly', true);
          element.setAttribute('required', false);

          if (element.tagName === 'A') {
            element.removeAttribute('href');
          }
        });
        mediaEntity[viewMode].processedHtml = node.innerHTML;
      }
    }

    return {
      mediaContent: mediaEntity,
      mediaViewModes: mediaViewModes,
      mediaUpload: getSettings().__experimentalMediaUpload
    };
  })(DrupalMediaEntity);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalMediaEntity = createClass;
})(wp, jQuery, Drupal, DrupalGutenberg, drupalSettings);