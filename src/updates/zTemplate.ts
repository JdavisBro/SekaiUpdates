import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_X_0: UpdateType = {
  version: "3.X.0",
  description: "",
  features: [
    {
      name: "name",
      description: `
      desc
      `,
      tags: [],
      date: null,
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 0, 1),
    [Server.tw]: null,
    [Server.en]: null,
    [Server.kr]: null,
  },
};

export default v3_X_0;
