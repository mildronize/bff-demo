export {};

declare global {

  type GlobalState = {
    toggle: boolean;
  };

  interface Window {
    globalState: GlobalState;
  }
}
