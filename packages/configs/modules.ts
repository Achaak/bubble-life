import { ModulesConfigType } from "@bubble/types/src/module";

export const ModulesConfig: ModulesConfigType[] = [
  {
    name: "calendar",
    position: "top-left",
    config: {
      dateFormat: "dddd, D MMMM, YYYY", // https://day.js.org/docs/en/display/format
      lang: "fr",
    },
  },
  {
    name: "devtool",
    position: "top-right",
  },
];
