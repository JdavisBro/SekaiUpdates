import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v2_8_0: UpdateType = {
  version: "2.8.0",
  description: "",
  features: [
    {
      name: "Reread Login Stories",
      description: `
      - Login stories were only played once during the event when you first logged in and could not be read again, but from now on you will be able to read them again during the event.
      - There will be a play button in the news page for each login story.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 8, 13),
  },
};

export default v2_8_0;
