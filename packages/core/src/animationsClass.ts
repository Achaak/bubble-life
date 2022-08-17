import {
  addAnimationInList,
  getBubble,
  removeAnimationInList,
  resetActionAnimation,
  resetAnimation,
  setActionAnimation,
} from '@bubble/store';
import type { Animation, AnimationConfig, SocketEvents } from '@bubble/types';
import anime from 'animejs';
import { getMaxImportantItemInList, socket } from '@bubble/common';

import { AnimationList } from './animations/index.js';
import { AnimationDefault } from './animations/default.js';

export class Animations {
  currentAnimation: AnimationConfig | null;

  socket?: SocketEvents;

  timeline: anime.AnimeTimelineInstance;

  constructor() {
    this.currentAnimation = null;

    this.socket = socket({
      localhost: true,
    });

    this.timeline = anime.timeline({
      autoplay: true,
      targets: '#bubble-content',
    });

    this.socket.on('resetAnimation', resetAnimation);
    this.socket.on('addAnimationInList', addAnimationInList);
    this.socket.on('removeAnimationInList', removeAnimationInList);
    this.socket.on('setActionAnimation', setActionAnimation);
    this.socket.on('resetActionAnimation', resetActionAnimation);
  }

  update = (): void => {
    if (!this.currentAnimation && document.getElementById('bubble-content')) {
      this.onStartAnimation();
    }
  };

  onStartAnimation = (): void => {
    const {
      animation: {
        action: animationAction,
        default: animationDefault,
        list: animationList,
      },
    } = getBubble();

    let animationName: Animation | null = null;

    if (animationAction) {
      animationName = animationAction.name;
    } else if (animationList.length > 0) {
      animationName = getMaxImportantItemInList(animationList);
    } else if (animationDefault) {
      animationName = animationDefault;
    }

    const animationFind = AnimationList.find(
      (item) => item.name === animationName
    );

    if (animationFind) {
      this.currentAnimation = animationFind;
    } else {
      this.currentAnimation = AnimationDefault;
    }

    this.onAnimation();
  };

  onEndAnimation = (): void => {
    this.currentAnimation = null;
  };

  onAnimation = (): void => {
    if (!this.currentAnimation) {
      return;
    }

    for (let i = 0; i < this.currentAnimation.configs.length; i++) {
      const config = this.currentAnimation.configs[i];

      this.timeline.add({
        ...config,
        complete:
          this.currentAnimation.configs.length - 1 === i
            ? this.onEndAnimation
            : undefined,
      });
    }
  };
}
