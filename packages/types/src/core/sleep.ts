export type AddSleepActionInWaitingList = {
  start: number;
  duration: number;
  importance: 1 | 2 | 3;
  memory?: {
    recoverValue?: number;
  };
};
