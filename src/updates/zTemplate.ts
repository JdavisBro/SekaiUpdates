import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_X_0: UpdateType = {
  version: "5.X.0",
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
    [Server.jp]: new Date(2025, 0, 1),
  },
};

export default v5_X_0;
