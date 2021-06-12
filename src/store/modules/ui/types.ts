export interface StateUi {
  modal: StateUiModal;
  modalConfirm: StateUiModalConfirm;
  mask: StateUiMask;
  menu: StateUiMenu;
  mode: StateUiMode;
}

export interface StateUiModal {
  open: boolean;
  text: string;
  settings: boolean;
}

export interface StateUiModalConfirm {
  open: boolean;
  text: string;
}

export interface StateUiMask {
  show: boolean;
  text: string;
}

export interface StateUiMenu {
  show: boolean;
}

export interface StateUiMode {
  dark: boolean;
}

export const test = '3'
