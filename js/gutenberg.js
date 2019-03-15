/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function (Drupal, DrupalGutenberg, drupalSettings, wp, $) {
  Drupal.editors.gutenberg = {
    attach: function attach(element, format) {
      var _this = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _format$editorSetting, allowedBlocks, blackList, data, blocks, editor, unregisterBlockType, registerDrupalStore, registerDrupalBlocks, key, value, categories, isFormValid;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _format$editorSetting = format.editorSettings, allowedBlocks = _format$editorSetting.allowedBlocks, blackList = _format$editorSetting.blackList;
                data = wp.data, blocks = wp.blocks, editor = wp.editor;
                unregisterBlockType = blocks.unregisterBlockType;
                registerDrupalStore = DrupalGutenberg.registerDrupalStore, registerDrupalBlocks = DrupalGutenberg.registerDrupalBlocks;
                _context.next = 6;
                return registerDrupalStore(data);

              case 6:
                _context.next = 8;
                return registerDrupalBlocks(blocks, editor);

              case 8:

                _this._initGutenberg(element);

                blackList.forEach(function (value) {
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

                data.dispatch('core/nux').disableTips();

                blocks.registerBlockStyle('core/image', {
                  name: 'colorbox',
                  label: 'Colorbox image'
                });

                data.dispatch('core/edit-post').setAvailableMetaBoxesPerLocation({
                  advanced: ['drupalSettings']
                });


                setTimeout(function () {
                  drupalSettings.gutenberg.metaboxes.forEach(function (id) {
                    $('.edit-post-meta-boxes-area__container').append($('#' + id));
                  });
                }, 0);

                $(document.forms[0]).attr('novalidate', true);

                setTimeout(function () {
                  $('.edit-post-header__settings').append($('.gutenberg-header-settings'));
                  $('.gutenberg-full-editor').addClass('ready');
                  $('#gutenberg-loading').addClass('hide');
                }, 0);

                isFormValid = false;


                $('#edit-submit, #edit-preview').on('click', function (e) {
                  $(e.currentTarget).attr('active', true);

                  data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                  $('#edit-additional-fields').attr('open', '');

                  $(document.forms[0]).removeAttr('novalidate');

                  setTimeout(function () {
                    isFormValid = document.forms[0].reportValidity();

                    if (isFormValid) {
                      $(e.currentTarget).click();
                    } else {
                      $(e.currentTarget).removeAttr('active');
                    }

                    $(document.forms[0]).attr('novalidate', true);
                  });

                  if (!isFormValid) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });

                $(document.forms[0]).on('submit', function (e) {
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

                  data.dispatch('core/editor').savePost();

                  return true;
                });

                return _context.abrupt('return', true);

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
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
      var editPost = wp.editPost;

      var $textArea = $(element);
      var target = 'editor-' + $textArea.data('drupal-selector');
      var $editor = $('<div id="' + target + '" class="gutenberg__editor"></div>');
      $editor.insertAfter($textArea);
      $textArea.hide();

      wp.node = {
        categories: [],
        content: { raw: $(element).val(), rendered: '' },
        featured_media: 0,
        id: 1,
        parent: 0,
        permalink_template: '',
        revisions: { count: 0, last_id: 0 },
        status: 'draft',
        theme_style: true,
        type: 'page'
      };

      var editorSettings = {
        alignWide: true,
        availableTemplates: [],
        allowedBlockTypes: true,
        disableCustomColors: false,
        disablePostFormats: false,
        mediaLibrary: true,

        imageSizes: drupalSettings.gutenberg['image-sizes'],
        titlePlaceholder: Drupal.t('Add title'),
        bodyPlaceholder: Drupal.t('Add text or type / to add content'),
        isRTL: false,
        autosaveInterval: 0,
        canAutosave: false,
        canPublish: false,
        canSave: false };

      var colors = drupalSettings.gutenberg && drupalSettings.gutenberg['theme-support'] && drupalSettings.gutenberg['theme-support'].colors ? _extends({}, drupalSettings.gutenberg['theme-support'].colors) : null;
      var fontSizes = drupalSettings.gutenberg && drupalSettings.gutenberg['theme-support'] && drupalSettings.gutenberg['theme-support'].fontSizes ? _extends({}, drupalSettings.gutenberg['theme-support'].fontSizes) : null;

      if (colors) {
        editorSettings.colors = colors;
      }

      if (fontSizes) {
        editorSettings.fontSizes = fontSizes;
      }

      window.customGutenberg = {
        events: {
          OPEN_GENERAL_SIDEBAR: function OPEN_GENERAL_SIDEBAR(action) {
            var tab = action.name.replace(/edit-post\//g, '');
            tab = tab.replace(/drupal\//g, '');

            var $tabG = $('.edit-post-sidebar .components-panel .tab');
            $('.gutenberg-sidebar').append($tabG);

            setTimeout(function () {
              var $tabD = $('.gutenberg-sidebar .tab.' + tab);
              $('.edit-post-sidebar .components-panel').append($tabD);
            }, 0);

            $(document.body).addClass('gutenberg-sidebar-open');
          },
          CLOSE_GENERAL_SIDEBAR: function CLOSE_GENERAL_SIDEBAR() {
            $(document.body).removeClass('gutenberg-sidebar-open');

            $('.gutenberg-sidebar').append($('.edit-post-sidebar .components-panel .tab'));
          }
        }
      };

      return editPost.initializeEditor(target, 'page', 1, editorSettings, {});
    }
  };
})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);