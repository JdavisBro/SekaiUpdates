import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_6_0: UpdateType = {
  version: "3.6.0",
  description: "",
  features: [
    {
      name: "Engine Update",
      description: `
Project SEKAI will be updating its game engine to "Unity 2022."
Due to this engine change, there will also be changes to several things such as compatible OS and space.
This engine update to "Unity 2022" is necessary for the game's future development and operation, so the devs have asked for everyone's understanding.

## Compatible OS
- iOS
  - BEFORE: iOS 11.0 and above
  - AFTER: iOS 12.0 and above
- Android
  - BEFORE: Android 5.0 and above
  - AFTER: Android 5.1 and above

Please note that the game will NOT be available for devices with OS below the ones listed above (AFTER update), so please do consider updating your device's OS or changing your device before the update.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 4, 21),
  },
};

export default v3_6_0;
