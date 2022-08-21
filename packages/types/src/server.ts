import type { Socket } from 'socket.io-client';
import type {
  AddEatActionInWaitingList,
  AddNapActionInWaitingList,
  AddPlayActionInWaitingList,
  AddShoppingActionInWaitingList,
  AddSleepActionInWaitingList,
} from './core/index.js';
import type {
  ActionsState,
  AddActionInCancelList,
  AddActionInWaitingList,
  AddAnimationInList,
  AddBodyInList,
  AddClotheInList,
  AddEnvironmentInList,
  AddEyesInList,
  AddHappiness,
  AddHatInList,
  AddHealth,
  AddInventoryItem,
  AddMessageInWaitingList,
  AddOnomatopoeiaInList,
  AddSaturation,
  AddTiredness,
  AddWeight,
  BubbleState,
  DeleteMemoryValue,
  HasActionById,
  HasActionByName,
  HasActionInCancelListById,
  HasActionInCancelListByName,
  HasActionInCurrentById,
  HasActionInCurrentByName,
  HasActionInWaitingListById,
  HasActionInWaitingListByName,
  HasInventoryItem,
  HasMessageInCurrentById,
  HasMessageInWaitingListById,
  RemoveActionFromCancelList,
  RemoveActionFromWaitingList,
  RemoveAnimationInList,
  RemoveBodyInList,
  RemoveClotheInList,
  RemoveEnvironmentInList,
  RemoveEyesInList,
  RemoveHappiness,
  RemoveHatInList,
  RemoveHealth,
  RemoveInventoryItem,
  RemoveMessageFromWaitingList,
  RemoveOnomatopoeiaInList,
  RemoveSaturation,
  RemoveTiredness,
  RemoveWeight,
  SetActionAnimation,
  SetActionBody,
  SetActionClothe,
  SetActionEnvironment,
  SetActionEyes,
  SetActionHat,
  SetActionOnomatopoeia,
  SetCurrentAction,
  SetCurrentMessage,
  SetHappiness,
  SetHealth,
  SetSaturation,
  SetShowFPS,
  SettingsState,
  SetTiredness,
  SetWeight,
  TransferActionFromCancelListToCurrent,
  TransferActionFromWaitingListToCurrent,
  TransferMessageFromWaitingListToCurrent,
  UpdateMemoryValue,
} from './store/index.js';

export interface CommonEvents {
  newUser: (value: { name: string }) => void;

  reloadPage: () => void;

  // Store state
  actionsStore: (value: ActionsState) => void;
  bubbleStore: (value: BubbleState) => void;
  settingsStore: (value: SettingsState) => void;

  // Message
  message: (value: {
    content: string;
    start?: number;
    duration?: number;
    importance?: 1 | 2 | 3;
  }) => void;

  // Actions core vitals
  addEatActionInWaitingList: (params: AddEatActionInWaitingList) => void;
  addEatActionInWaitingListDefault: () => void;
  addNapActionInWaitingList: (params: AddNapActionInWaitingList) => void;
  addNapActionInWaitingListDefault: () => void;
  addPlayActionInWaitingList: (params: AddPlayActionInWaitingList) => void;
  addPlayActionInWaitingListDefault: () => void;
  addShoppingActionInWaitingList: (
    params: AddShoppingActionInWaitingList
  ) => void;
  addShoppingActionInWaitingListDefault: () => void;
  addSleepActionInWaitingList: (params: AddSleepActionInWaitingList) => void;
  addSleepActionInWaitingListDefault: () => void;

  // Actions store actions
  resetActions: () => void;
  hasActionByName: (params: HasActionByName) => void;
  hasActionById: (params: HasActionById) => void;
  updateMemoryValue: (params: UpdateMemoryValue) => void;
  deleteMemoryValue: (params: DeleteMemoryValue) => void;

  // Actions store actions cancelList
  hasActionInCancelListByName: (params: HasActionInCancelListByName) => void;
  hasActionInCancelListById: (params: HasActionInCancelListById) => void;
  addActionInCancelList: (params: AddActionInCancelList) => void;
  removeActionFromCancelList: (params: RemoveActionFromCancelList) => void;
  transferActionFromCancelListToCurrent: (
    params: TransferActionFromCancelListToCurrent
  ) => void;

  // Actions store actions current
  setCurrentAction: (params: SetCurrentAction) => void;
  resetCurrentAction: () => void;
  hasActionInCurrentByName: (params: HasActionInCurrentByName) => void;
  hasActionInCurrentById: (params: HasActionInCurrentById) => void;

  // Actions store actions waitingList
  hasActionInWaitingListByName: (params: HasActionInWaitingListByName) => void;
  hasActionInWaitingListById: (params: HasActionInWaitingListById) => void;
  addActionInWaitingList: (params: AddActionInWaitingList) => void;
  removeActionFromWaitingList: (params: RemoveActionFromWaitingList) => void;
  transferActionFromWaitingListToCurrent: (
    params: TransferActionFromWaitingListToCurrent
  ) => void;

  // Actions store bubble
  resetBubble: () => void;

  // Actions store bubble elements bodies
  addBodyInList: (params: AddBodyInList) => void;
  removeBodyInList: (params: RemoveBodyInList) => void;
  resetBody: () => void;
  setActionBody: (params: SetActionBody) => void;
  resetActionBody: () => void;

  // Actions store bubble elements clothes
  addClotheInList: (params: AddClotheInList) => void;
  removeClotheInList: (params: RemoveClotheInList) => void;
  resetClothe: () => void;
  setActionClothe: (params: SetActionClothe) => void;
  resetActionClothe: () => void;

  // Actions store bubble elements environments
  addEnvironmentInList: (params: AddEnvironmentInList) => void;
  removeEnvironmentInList: (params: RemoveEnvironmentInList) => void;
  resetEnvironment: () => void;
  setActionEnvironment: (params: SetActionEnvironment) => void;
  resetActionEnvironment: () => void;

  // Actions store bubble elements eyes
  addEyesInList: (params: AddEyesInList) => void;
  removeEyesInList: (params: RemoveEyesInList) => void;
  resetEyes: () => void;
  setActionEyes: (params: SetActionEyes) => void;
  resetActionEyes: () => void;

  // Actions store bubble elements hats
  addHatInList: (params: AddHatInList) => void;
  removeHatInList: (params: RemoveHatInList) => void;
  resetHat: () => void;
  setActionHat: (params: SetActionHat) => void;
  resetActionHat: () => void;

  // Actions store bubble elements onomatopoeias
  addOnomatopoeiaInList: (params: AddOnomatopoeiaInList) => void;
  removeOnomatopoeiaInList: (params: RemoveOnomatopoeiaInList) => void;
  resetOnomatopoeia: () => void;
  setActionOnomatopoeia: (params: SetActionOnomatopoeia) => void;
  resetActionOnomatopoeia: () => void;

  // Actions store bubble message current
  setCurrentMessage: (params: SetCurrentMessage) => void;
  resetCurrentMessage: () => void;
  hasMessageInCurrentById: (params: HasMessageInCurrentById) => void;

  // Actions store bubble message waitingList
  hasMessageInWaitingListById: (params: HasMessageInWaitingListById) => void;
  addMessageInWaitingList: (params: AddMessageInWaitingList) => void;
  removeMessageFromWaitingList: (params: RemoveMessageFromWaitingList) => void;
  transferMessageFromWaitingListToCurrent: (
    params: TransferMessageFromWaitingListToCurrent
  ) => void;

  // Actions store bubble vitals happiness
  setHappiness: (params: SetHappiness) => void;
  resetHappiness: () => void;
  addHappiness: (params: AddHappiness) => void;
  removeHappiness: (params: RemoveHappiness) => void;

  // Actions store bubble vitals health
  setHealth: (params: SetHealth) => void;
  resetHealth: () => void;
  addHealth: (params: AddHealth) => void;
  removeHealth: (params: RemoveHealth) => void;

  // Actions store bubble vitals saturation
  setSaturation: (params: SetSaturation) => void;
  resetSaturation: () => void;
  addSaturation: (params: AddSaturation) => void;
  removeSaturation: (params: RemoveSaturation) => void;

  // Actions store bubble vitals tiredness
  setTiredness: (params: SetTiredness) => void;
  resetTiredness: () => void;
  addTiredness: (params: AddTiredness) => void;
  removeTiredness: (params: RemoveTiredness) => void;

  // Actions store bubble vitals weight
  setWeight: (params: SetWeight) => void;
  resetWeight: () => void;
  addWeight: (params: AddWeight) => void;
  removeWeight: (params: RemoveWeight) => void;

  // Actions store bubble animations
  resetAnimation: () => void;
  addAnimationInList: (params: AddAnimationInList) => void;
  removeAnimationInList: (params: RemoveAnimationInList) => void;
  setActionAnimation: (params: SetActionAnimation) => void;
  resetActionAnimation: () => void;

  // Actions store bubble vitals inventory
  addInventoryItem: (params: AddInventoryItem) => void;
  removeInventoryItem: (params: RemoveInventoryItem) => void;
  hasInventoryItem: (params: HasInventoryItem) => void;

  // Settings store
  setShowFPS: (params: SetShowFPS) => void;
}

export type ServerToClientEvents = CommonEvents;

export type ClientToServerEvents = CommonEvents;

export interface InterServerEvents {}

export interface SocketData {}

export type SocketEvents = Socket<ServerToClientEvents, ClientToServerEvents>;
