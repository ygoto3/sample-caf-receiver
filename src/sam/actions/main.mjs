// @flow
import Player from '../../components/player/index.mjs';

export default {
  initPage(model/*: Model*/) {
    const player = new Player({
      castMediaPlayerId: model.castMediaPlayerId,
      loadRequestDataFilter(loadRequestData) {
        return loadRequestData;
      }
    });
    player.start();
    return { player };
  }
};
