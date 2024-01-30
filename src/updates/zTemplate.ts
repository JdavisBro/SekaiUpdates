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
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 0, 1),
  },
};

export default v3_X_0;
