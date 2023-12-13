import { Server } from '../types/ServerType.ts';
import { UpdateType } from '../types/UpdateType.ts'

const v2_5_0: UpdateType = {
    version: "2.5.0",
    description: "",
    features: [
        {
            name: "Disk Shop & Theater",
            description: "PLACEHOLDER",
            tags: ["theatre", "virtual live", "virtual show", "vlive", "replay", "connect live"],
            date: {
                [Server.tw]: null,
                [Server.en]: new Date(2023, 9, 1), // placeholder, probably wrong
                [Server.kr]: null,
            }
        },
    ],
    date: {
        [Server.jp]: new Date(2022, 11, 19),
        [Server.tw]: null, [Server.en]: null, [Server.kr]: null
    }
}

export default v2_5_0;
