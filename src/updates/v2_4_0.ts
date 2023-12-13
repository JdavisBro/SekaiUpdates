import { Server } from '../types/ServerType.ts';
import { UpdateType } from '../types/UpdateType.ts'

const v2_4_0: UpdateType = {
    version: "2.4.0",
    description: "",
    features: [
        {
            name: "Report Players",
            description: `
            - After the update, a new feature that will let you report malicious players to the game devs will be added. You will be able to report players by using the "Report Form."
            - This use of this feature isn't to immediately or automatically ban players who get reported, but rather to help the game devs to identify malicious players by looking at the number of reports the player(s) receive and investigating them, so that the devs can take the appropriate actions faster.
            - Please note that things such as penalties or bans may take some time to do, as everything will be done manually and carefully by the devs so that no false bans/penalties will take place.
            ## Where Reports Can Be Made
            - Friend Request List Screen
            - Player's Profile Screen (X)
            - Virtual Live / Connect Live Waiting Lobby Chat
            - Player's Virtual Live / Connect Live's Cheering Message(s)
            NOTE: Starting from the next update, you will be able to view other players' profiles from the Live Result screen.
            ## What Can Be Reported From the Report Form
            - Harassments and/or offensive remarks towards you
            - Harassments and/or offensive remarks towards other players
            - Harassments and/or offensive remarks towards characters and/or units
            - Obscene, indecent, and/or sexual remarks
            - Cheatings and/or other fraudulent or illegal activities
            - Other violations of the game's terms of use and service
            ## Players who have received certain number of reports and are confirmed to be malicious will be subject to one of the following penalties:
            - Penalties
            - 5-minute suspension (Warning)
            - I-day suspension (24 hours)
            - a-day suspension (72 hours)
            - I-week suspension (168 hours)
            - Permanent suspension (BAN)
            A player's penalty will increase every time they receive one penalty, and the stage of penalty a player can receive will vary according on either the number of the penalties the player has received, or the player's case, which means, depending on how heavy the case is, a player can be banned immediately.

            NOTE: Players who have been banned once in the past can and will be banned again immediately as soon as the devs identify them as the same player with the original banned data/account, even if said players made a new account with a new data.
            `,
            tags: ["reporting", "cheating"],
            date: null
        },
        {
            name: "Block Players",
            description: "PLACEHOLDER",
            tags: ["blocking"],
            date: null
        },
        {
            name: "Friend Request Preferences",
            description: "PLACEHOLDER",
            tags: [],
            date: null
        },
        {
            name: "Player Profile from Live Result Screen",
            description: "Starting from the next update, you will be able to view other players' profiles from the Live Result screen.",
            tags: ["show result"],
            date: null
        },
        {
            name: "Game Data Transfer Restriction",
            description: "PLACEHOLDER",
            tags: ["account sharing", "account syncing"],
            date: null
        },
        {
            name: "Live Mission Adjustments",
            description: "PLACEHOLDER",
            tags: ["battle pass", "mission pass"],
            date: null
        },
        {
            name: "Music Mylist",
            description: "PLACEHOLDER",
            tags: ["playlist", "favorite", "favourite"],
            date: null
        },
        {
            name: "Focus Camera",
            description: "PLACEHOLDER",
            tags: ["focus", "zoom", "virtual show", "virtual live", "vlive"],
            date: null
        },
        {
            name: "Always Change Challenge Show Teams",
            description: "PLACEHOLDER",
            tags: ["challenge show", "challenge live"],
            date: null
        },
        {
            name: "3DMV Viewer Character Costume Select",
            description: "PLACEHOLDER",
            tags: ["outfit select"],
            date: null
        },
        {
            name: "Original MV and 2DMV in the View MV Feature",
            description: "PLACEHOLDER",
            tags: ["ogmv", "movie", "video"],
            date: null
        },
        {
            name: "Batch Download Song and MV Data",
            description: "PLACEHOLDER",
            tags: ["2dmv", "3dmv", "preload", "ogmv", "video"],
            date: null
        },
        {
            name: "Adjustments to FES Scorer Skill",
            description: "PLACEHOLDER",
            tags: ["colofes", "colorful festival"],
            date: null
        },
        {
            name: "Adjustments and Bug Fixes",
            description: `
            - Players who are in "waiting" status during Multi Lives / Cheerful Lives will be automatically removed from the room after a certain period of time.
            - Modify the "Regular Missions" tab so that it will be hidden when all regular missions have been cleared.
            - Display the percentage of gacha rates to four decimal places.
            - Improvements & adjustments to other detailed features/functions, direction, logic, etc.
            - Other minor bug fixes.
            `,
            tags: [],
            date: null
        }
    ],
    date: {
        [Server.jp]: new Date(2022, 11, 19),
        [Server.tw]: null, [Server.en]: null, [Server.kr]: null
    }
}

export default v2_4_0;
