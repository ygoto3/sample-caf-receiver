// @flow
/*::
interface PlayerConstructorParams {
  castMediaPlayerId: string;
  loadRequestDataFilter: (loadRequestData: cast$loadRequestData) => cast$loadRequestData;
};
*/

export default class Player {
  /*::
  mediaElement: HTMLMediaElement;
  context: cast$CastReceiverContext;
  playerManager: cast$PlayerManager;
  */
  constructor(params/*: PlayerConstructorParams*/) {
    this.mediaElement = (document.getElementById(params.castMediaPlayerId)/*: any*/).getMediaElement();
    this.context = cast.framework.CastReceiverContext.getInstance();
    this.playerManager = this.context.getPlayerManager();

    this.init_(params);
  }

  start() {
    const { context } = this;
    context.start();
  }

  init_(params/*: PlayerConstructorParams*/) {
    if (params.loadRequestDataFilter) {
      this.playerManager.setMessageInterceptor(
        cast.framework.messages.MessageType.LOAD,
        params.loadRequestDataFilter
      );
    }
  }
}
