/* eslint func-names: ["error", "never"] */
(function() {
  function registerDrupalStore(data) {
    const { registerStore, dispatch } = data;

    const DEFAULT_STATE = {
      blocks: {},
      mediaEntities: {},
    };

    return registerStore('drupal', {
      reducer(state = DEFAULT_STATE, action) {
        switch (action.type) {
          case 'SET_BLOCK':
            return {
              ...state,
              blocks: {
                ...state.blocks,
                [action.item]: action.block,
              },
            };
          case 'SET_MEDIA_ENTITY':
            return {
              ...state,
              mediaEntities: {
                ...state.mediaEntities,
                [action.ids]: action.mediaEntity,
              }
            };
          default:
            return state;
        }
      },

      actions: {
        setBlock(item, block) {
          return {
            type: 'SET_BLOCK',
            item,
            block,
          };
        },
        setMediaEntities(ids, mediaEntity) {
          return {
            type: 'SET_MEDIA_ENTITY',
            ids,
            mediaEntity,
          };
        }
      },

      selectors: {
        getBlock(state, item) {
          const { blocks } = state;
          const block = blocks[item];

          return block;
        },
        getMediaEntities(state, item) {
          const { mediaEntities } = state;
          return mediaEntities[item];
        }
      },

      resolvers: {
        async getBlock(item) {
          const response = await fetch(`
            ${drupalSettings.path.baseUrl}editor/blocks/load/${item}
          `);
          const block = await response.json();
          dispatch('drupal').setBlock(item, block);
          return {
            type: 'GET_BLOCK',
            item,
            block,
          };
        },
        async getMediaEntities(mediaEntityIds) {
          // @todo: add support for multi selection
          const ids = mediaEntityIds.join(',');
          const response = await fetch(`
            ${drupalSettings.path.baseUrl}editor/media/render/${ids}
          `);

          if (response.ok) {
            const entity = await response.json();
            if (entity && entity.length) {
              dispatch('drupal').setMediaEntities(ids, entity);
              return entity;
            }
          }

          if (response.status === 404) {
            Drupal.notifyError("Media entity couldn't be found.");
            return null;
          }

          if (!response.ok) {
            Drupal.notifyError("An error occurred while fetching data.");
            return null;
          }
        }
      },
    });
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalStore = registerDrupalStore;
})();
