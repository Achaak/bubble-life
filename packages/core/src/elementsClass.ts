import { socket } from '@bubble/common';
import {
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  removeBodyInList,
  removeClotheInList,
  removeEnvironmentInList,
  removeEyesInList,
  removeHatInList,
  removeOnomatopoeiaInList,
  resetActionBody,
  resetActionClothe,
  resetActionEnvironment,
  resetActionEyes,
  resetActionHat,
  resetActionOnomatopoeia,
  resetBody,
  resetClothe,
  resetEnvironment,
  resetEyes,
  resetHat,
  resetOnomatopoeia,
  setActionBody,
  setActionClothe,
  setActionEnvironment,
  setActionEyes,
  setActionHat,
  setActionOnomatopoeia,
} from '@bubble/store';
import type { SocketEvents } from '@bubble/types';

export class Elements {
  socket?: SocketEvents;

  constructor() {
    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addBodyInList', addBodyInList);
    this.socket.on('removeBodyInList', removeBodyInList);
    this.socket.on('resetBody', resetBody);
    this.socket.on('setActionBody', setActionBody);
    this.socket.on('resetActionBody', resetActionBody);
    this.socket.on('addClotheInList', addClotheInList);
    this.socket.on('removeClotheInList', removeClotheInList);
    this.socket.on('resetClothe', resetClothe);
    this.socket.on('setActionClothe', setActionClothe);
    this.socket.on('resetActionClothe', resetActionClothe);
    this.socket.on('addEnvironmentInList', addEnvironmentInList);
    this.socket.on('removeEnvironmentInList', removeEnvironmentInList);
    this.socket.on('resetEnvironment', resetEnvironment);
    this.socket.on('setActionEnvironment', setActionEnvironment);
    this.socket.on('resetActionEnvironment', resetActionEnvironment);
    this.socket.on('addEyesInList', addEyesInList);
    this.socket.on('removeEyesInList', removeEyesInList);
    this.socket.on('resetEyes', resetEyes);
    this.socket.on('setActionEyes', setActionEyes);
    this.socket.on('resetActionEyes', resetActionEyes);
    this.socket.on('addHatInList', addHatInList);
    this.socket.on('removeHatInList', removeHatInList);
    this.socket.on('resetHat', resetHat);
    this.socket.on('setActionHat', setActionHat);
    this.socket.on('resetActionHat', resetActionHat);
    this.socket.on('addOnomatopoeiaInList', addOnomatopoeiaInList);
    this.socket.on('removeOnomatopoeiaInList', removeOnomatopoeiaInList);
    this.socket.on('resetOnomatopoeia', resetOnomatopoeia);
    this.socket.on('setActionOnomatopoeia', setActionOnomatopoeia);
    this.socket.on('resetActionOnomatopoeia', resetActionOnomatopoeia);
  }
}
