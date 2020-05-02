/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function (Drupal, DrupalGutenberg, drupalSettings, wp, $) {
  Drupal.isMediaEnabled = function () {
    return (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-enabled'];
  };

  Drupal.isMediaLibraryEnabled = function () {
    return (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-library-enabled'];
  };

  Drupal.toggleGutenbergLoader = function (state) {
    var $gutenbergLoader = $('#gutenberg-loading');
    switch (state) {
      case 'show':
        $gutenbergLoader.removeClass('hide');
        break;
      case 'hide':
        $gutenbergLoader.addClass('hide');
        break;
    }
  };

  Drupal.notifyError = function (message) {
    return wp.data.dispatch('core/notices').createErrorNotice(message, {
      isDismissible: true
    });
  };

  Drupal.notifySuccess = function (message) {
    return wp.data.dispatch('core/notices').createSuccessNotice(message, {
      isDismissible: true
    });
  };

  Drupal.AjaxCommands.prototype.reloadBlock = function () {
    var _this = this;

    var _wp$data = wp.data,
        select = _wp$data.select,
        dispatch = _wp$data.dispatch;

    var selectedBlock = select('core/block-editor').getSelectedBlock();
    var clientId = selectedBlock.clientId;
    var mediaEntityIds = selectedBlock.attributes.mediaEntityIds;


    _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch('core/block-editor').updateBlock(clientId, {
                attributes: { mediaEntityIds: [] }
              });

            case 2:

              setTimeout(function () {
                dispatch('core/block-editor').updateBlock(clientId, {
                  attributes: { mediaEntityIds: mediaEntityIds }
                });
              }, 100);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  };

  Drupal.editors.gutenberg = {
    attach: function attach(element, format) {
      var _this2 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var _format$editorSetting, contentType, allowedBlocks, blackList, data, blocks, hooks, dispatch, addFilter, unregisterBlockType, registerDrupalStore, registerDrupalBlocks, registerDrupalMedia, key, value, categories, isWelcomeGuide, metaboxesContainer, metaboxForm, isFormValid, formSubmitted;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!drupalSettings.gutenbergLoaded) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', false);

              case 2:
                drupalSettings.gutenbergLoaded = true;

                _format$editorSetting = format.editorSettings, contentType = _format$editorSetting.contentType, allowedBlocks = _format$editorSetting.allowedBlocks, blackList = _format$editorSetting.blackList;
                data = wp.data, blocks = wp.blocks, hooks = wp.hooks;
                dispatch = data.dispatch;
                addFilter = hooks.addFilter;
                unregisterBlockType = blocks.unregisterBlockType;
                registerDrupalStore = DrupalGutenberg.registerDrupalStore, registerDrupalBlocks = DrupalGutenberg.registerDrupalBlocks, registerDrupalMedia = DrupalGutenberg.registerDrupalMedia;
                _context3.next = 11;
                return addFilter('blocks.registerBlockType', 'drupalgutenberg/custom-attributes', function (settings, name) {
                  settings.attributes = Object.assign(settings.attributes, {
                    mappingField: {
                      type: 'string',
                      default: ''
                    },
                    mappingAttribute: {
                      type: 'string',
                      default: ''
                    }
                  });

                  if (name === 'core/block') {
                    settings.attributes.ref = {
                      type: 'number'
                    };
                  }

                  return settings;
                });

              case 11:
                _context3.next = 13;
                return registerDrupalStore(data);

              case 13:
                _context3.next = 15;
                return registerDrupalBlocks(contentType);

              case 15:
                _context3.next = 17;
                return registerDrupalMedia();

              case 17:
                _context3.next = 19;
                return _this2._initGutenberg(element);

              case 19:

                if (drupalSettings.gutenberg._listeners.init) {
                  drupalSettings.gutenberg._listeners.init.forEach(function (callback) {
                    callback();
                  });
                }

                if (drupalSettings.gutenberg.messages) {
                  Object.keys(drupalSettings.gutenberg.messages).forEach(function (key) {
                    drupalSettings.gutenberg.messages[key].forEach(function (message) {
                      switch (key) {
                        case 'error':
                          dispatch('core/notices').createErrorNotice(message);
                          break;
                        case 'warning':
                          dispatch('core/notices').createWarningNotice(message);
                          break;
                        case 'success':
                          dispatch('core/notices').createSuccessNotice(message);
                          break;
                        default:
                          dispatch('core/notices').createWarningNotice(message);
                          break;
                      }
                    });
                  });
                }

                $('div.messages--error').each(function (index, el) {
                  dispatch('core/notices').createErrorNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                $('div.messages--warning').each(function (index, el) {
                  dispatch('core/notices').createWarningNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                $('div.messages--success').each(function (index, el) {
                  dispatch('core/notices').createSuccessNotice($(el).html(), {
                    __unstableHTML: $(el).html()
                  });
                  $(el).remove();
                });

                blackList.filter(function (value) {
                  return !value.includes('drupalblock/');
                }).forEach(function (value) {
                  unregisterBlockType(value);
                });

                for (key in allowedBlocks) {
                  if (allowedBlocks.hasOwnProperty(key)) {
                    value = allowedBlocks[key];

                    if (!value && !key.includes('/all') && !blackList.includes(key)) {
                      unregisterBlockType(key);
                    }
                  }
                }

                categories = data.select('core/blocks').getCategories().filter(function (item) {
                  if (item.slug === 'widgets') {
                    return false;
                  }
                  return true;
                });


                data.dispatch('core/blocks').setCategories(categories);

                data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                data.dispatch('core/edit-post').setAvailableMetaBoxesPerLocation({
                  advanced: ['drupalSettings']
                });

                data.dispatch('core/edit-post').removeEditorPanel('post-status');

                isWelcomeGuide = data.select('core/edit-post').isFeatureActive('welcomeGuide');


                if (isWelcomeGuide) {
                  data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
                }

                setTimeout(function () {
                  var $metaBoxContainer = $('.edit-post-meta-boxes-area__container');
                  drupalSettings.gutenberg.metaboxes.forEach(function (id) {
                    var $metabox = $('#' + id);
                    var metabox = $metabox.get(0);

                    Drupal.behaviors.editor.detach(metabox, drupalSettings);
                    $metabox.appendTo($metaBoxContainer);
                    Drupal.behaviors.editor.attach(metabox, drupalSettings);
                  });
                }, 0);

                metaboxesContainer = $(document.createElement('div'));

                metaboxesContainer.attr('id', 'metaboxes');
                $('body').append(metaboxesContainer);
                metaboxForm = $(document.createElement('form'));

                metaboxForm.addClass('metabox-location-advanced');
                metaboxesContainer.append(metaboxForm);

                $(document.forms[0]).attr('novalidate', true);

                setTimeout(function () {
                  $('.edit-post-header__settings').append($('.gutenberg-header-settings'));
                  $('.gutenberg-full-editor').addClass('ready');
                  Drupal.toggleGutenbergLoader('hide');
                }, 0);

                isFormValid = false;

                $('#edit-submit, #edit-preview').on('mousedown', function (e) {
                  var _data$dispatch = data.dispatch('core/edit-post'),
                      openGeneralSidebar = _data$dispatch.openGeneralSidebar;

                  isFormValid = element.form.reportValidity();

                  if (!isFormValid) {
                    openGeneralSidebar('edit-post/document');
                    openGeneralSidebar('edit-post/document');

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });

                $('#edit-submit, #edit-preview').on('click', function (e) {
                  $(e.currentTarget).attr('active', true);

                  $('#edit-additional-fields').attr('open', '');

                  $(element.form).removeAttr('novalidate');

                  setTimeout(function () {
                    isFormValid = element.form.reportValidity();

                    if (isFormValid) {
                      $(e.currentTarget).click();
                    } else {
                      $(e.currentTarget).removeAttr('active');
                    }

                    $(element.form).attr('novalidate', true);
                  });

                  if (!isFormValid) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });

                formSubmitted = false;

                $(element.form).on('submit', function (e) {
                  var $source = $('input[active="true"]');

                  $source.removeAttr('active');

                  if ($source.attr('id') !== 'edit-submit' && $source.attr('id') !== 'edit-preview' && $source.attr('id') !== 'edit-delete') {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }

                  $(element).val(data.select('core/editor').getEditedPostContent());

                  $(element).data({ 'editor-value-is-changed': true });
                  $(element).attr('data-editor-value-is-changed', true);

                  data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                  if (!formSubmitted) {
                    _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return data.dispatch('core/editor').savePost();

                            case 2:

                              formSubmitted = true;

                              $source.click();

                            case 4:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }))();

                    e.preventDefault();
                    e.stopPropagation();
                  }
                });

                return _context3.abrupt('return', true);

              case 48:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    attachInlineEditor: function attachInlineEditor(element, format, mainToolbarId, floatedToolbarId) {
      return false;
    },
    detach: function detach(element, format, trigger) {
      return true;
    },
    onChange: function onChange(element, callback) {
      return true;
    },
    _initGutenberg: function _initGutenberg(element) {
      var _this3 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var editPost, data, $textArea, target, $editor, defaultThemeSupport, editorSettings;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                editPost = wp.editPost, data = wp.data;
                $textArea = $(element);
                target = 'editor-' + $textArea.data('drupal-selector');
                $editor = $('<div id="' + target + '" class="gutenberg__editor"></div>');

                $editor.insertAfter($textArea);
                $textArea.hide();

                wp.node = {
                  categories: [],
                  content: {
                    block_version: 0,
                    protected: false,
                    raw: $(element).val(),
                    rendered: ''
                  },
                  featured_media: 0,
                  id: 1,
                  parent: 0,
                  permalink_template: '',
                  revisions: { count: 0, last_id: 1 },
                  status: 'auto-draft',
                  theme_style: true,
                  type: 'page',
                  slug: ''
                };

                defaultThemeSupport = {
                  disableCustomColors: false,
                  disableCustomFontSizes: false,
                  alignWide: true
                };
                editorSettings = _extends({}, defaultThemeSupport, drupalSettings.gutenberg['theme-support'], {
                  availableTemplates: [],
                  allowedBlockTypes: true,
                  disablePostFormats: false,
                  mediaLibrary: true,

                  imageSizes: drupalSettings.gutenberg['image-sizes'],
                  titlePlaceholder: Drupal.t('Add title'),
                  bodyPlaceholder: Drupal.t('Add text or type / to add content'),
                  isRTL: false,
                  localAutosaveInterval: 0,
                  autosaveInterval: 0,
                  template: drupalSettings.gutenberg.template || '',
                  templateLock: drupalSettings.gutenberg['template-lock'] === 'none' ? false : drupalSettings.gutenberg['template-lock'] || false
                });


                data.subscribe(function () {
                  var isFullscreenMode = data.select('core/edit-post').isFeatureActive('fullscreenMode');

                  setTimeout(function () {
                    var fullscreenLink = $('.edit-post-header a.edit-post-fullscreen-mode-close:not(.drupal)');

                    var drupalFullscreenLink = $('.edit-post-header a.edit-post-fullscreen-mode-close.drupal');

                    if (isFullscreenMode && fullscreenLink.length > 0 && drupalFullscreenLink.length === 0) {
                      var params = new URLSearchParams(window.location.search);
                      var backUrl = drupalSettings.path.baseUrl + 'admin/content';

                      if (RegExp(/node\/\d+\/edit/g).test(drupalSettings.path.currentPath)) {
                        backUrl = drupalSettings.path.baseUrl + drupalSettings.path.currentPath.replace('/edit', '');
                      }

                      backUrl = params.get('destination') || backUrl;

                      var domContainer = $('<div style="display: contents"></div>');
                      fullscreenLink.after(domContainer);

                      var icon = React.createElement(
                        'svg',
                        { version: '1.1', role: 'img', 'aria-hidden': 'true', focusable: 'false', id: 'Layer_1', x: '0px', y: '0px', viewBox: '0 0 2160 2880', 'enable-background': 'new 0 0 2160 2880', className: 'dashicon' },
                        React.createElement('path', { d: 'M1842.9,677.1C1638.9,473.1,1368,360,1080,360C485.1,360,0,845.1,0,1440s485.1,1080,1080,1080  s1080-485.1,1080-1080C2160,1152,2046.9,881.1,1842.9,677.1z M1080,2141.1c-325.7,0-591.4-265.7-591.4-591.4  c0-276,185.1-461.1,348-624c108-108,212.6-212.6,243.4-329.1c30.9,116.6,133.7,221.1,243.4,329.1c162.9,162.9,348,348,348,624  C1671.4,1875.4,1405.7,2141.1,1080,2141.1z' })
                      );

                      var render = wp.element.render;
                      var Button = wp.components.Button;

                      var drupalButton = React.createElement(Button, {
                        className: 'edit-post-fullscreen-mode-close drupal',
                        icon: icon,
                        iconSize: 36,
                        href: backUrl,
                        label: Drupal.t('Back')
                      });

                      render(drupalButton, domContainer[0]);
                    }
                  });

                  if (!data.select('core/block-editor').isValidTemplate()) {
                    data.dispatch('core/block-editor').setTemplateValidity(true);
                  }
                });

                sessionStorage.removeItem('wp-autosave-block-editor-post-1');
                localStorage.removeItem('wp-autosave-block-editor-post-1');

                _context4.next = 14;
                return editPost.initializeEditor(target, 'page', 1, editorSettings);

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    }
  };

  Drupal.behaviors.gutenbergMediaLibrary = {
    attach: function attach() {
      var $form = $('#media-entity-browser-modal .media-library-add-form');

      if (!$form.length) {
        return;
      }

      $form.find('[data-drupal-selector="edit-save-insert"]').css('display', 'none');
    }
  };
})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);