/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function (Drupal, DrupalGutenberg, drupalSettings, wp, $) {
  Drupal.editors.gutenberg = {
    attach: function attach(element, format) {
      var _this = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data, blocks, editor, registerDrupalStore, registerDrupalBlocks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = wp.data, blocks = wp.blocks, editor = wp.editor;
                registerDrupalStore = DrupalGutenberg.registerDrupalStore, registerDrupalBlocks = DrupalGutenberg.registerDrupalBlocks;
                _context.next = 4;
                return registerDrupalStore(data);

              case 4:
                _context.next = 6;
                return registerDrupalBlocks(blocks, editor);

              case 6:

                _this._initGutenberg(element);

                data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                data.dispatch('core/nux').disableTips();

                blocks.registerBlockStyle('core/image', {
                  name: 'colorbox',
                  label: 'Colorbox image'
                });

                setTimeout(function () {
                  $('.edit-post-header__settings').append($('.gutenberg-header-settings'));
                  $('.gutenberg-full-editor').addClass('ready');
                  $('#gutenberg-loading').addClass('hide');
                }, 0);

                $(document.forms[0]).on('submit', function (e) {
                  $(element).val(data.select('core/editor').getEditedPostContent());

                  $(element).data({ 'editor-value-is-changed': true });
                  $(element).attr('data-editor-value-is-changed', true);

                  data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

                  data.dispatch('core/editor').savePost();

                  var $source = $('[id^="edit-"]:focus');

                  if (!$source.length) {
                    $source = $(e.originalEvent.explicitOriginalTarget);
                  }

                  if ($source.attr('id') === 'edit-submit' || $source.attr('id') === 'edit-preview' || $source.attr('id') === 'edit-delete') {
                    return true;
                  }

                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                });

                return _context.abrupt('return', true);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
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
        mediaLibrary: false,
        titlePlaceholder: Drupal.t('Add title'),
        bodyPlaceholder: Drupal.t('Add text or type / to add content'),
        isRTL: false,
        autosaveInterval: 0,
        canAutosave: false,
        canPublish: false,
        canSave: false };

      var colors = null;
      var fontSizes = null;

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

            $(document.body).addClass('gutenberg-sidedar-open');
          },
          CLOSE_GENERAL_SIDEBAR: function CLOSE_GENERAL_SIDEBAR() {
            $(document.body).removeClass('gutenberg-sidedar-open');

            $('.gutenberg-sidebar').append($('.edit-post-sidebar .components-panel .tab'));
          }
        }
      };

      return editPost.initializeEditor(target, 'page', 1, editorSettings, {});
    }
  };
})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);