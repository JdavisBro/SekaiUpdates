import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_2_0: UpdateType = {
  version: "3.2.0",
  description: "",
  features: [
    {
      name: "Continue playing while HP is below 0",
      description: `
- This update will let players to continue playing and finish a song even when their HP bar goes down to 0.
- This will only apply in Solo Live & Challenge Live.
- When you finish a Solo or a Challenge Live with 0 HP, the text "LIVE FINISH" will be shown instead of the usual "LIVE CLEAR."
- With this update, the "Continue" option that usually appears when your HP bar goes down to 0 will be removed.
- Due to the removal of the "Continue" option, some missions that require you to use the "Continue" option will be changed, including the missions required to get the Title "Never Give Up."
- In addition, similar to Multi Live, when you finish a Solo and/or Challenge Live with 0 HP
  - The score you receive will be less
  - You will not be able to recover your HP anymore using the HP recovery skill for the rest of the live.

![The end of a Live with 0 HP showing the text "LIVE FINISH"](https://pjsekai.sega.jp/master-data/image/news/news_thumb_421_kJOEcWlDbq.PNG)
      `,
      tags: ["practice", "die", "lose"],
    },
    {
      name: "'Show Clear' Mission Changes",
      description: `
## ContentChanges;Content Changes
- [Title: Never Give Up]
  - Original: Clear 1 Live by using the "Continue" option at least 5 times.
  - Change: Play 5 Solo/Challenge Lives with O HP

![Never Give Up title with the new requirements](https://pjsekai.sega.jp/master-data/image/news/news_thumb_422_wMFDIvlHpJ_2.png)
- [Start Dash Mission] 
  - Original: CLEAR a Challenge Live 1 time
  - Change: PLAY a Challenge Live 1 time

## TextChanges;Text-Only Changes
- [Title: 1st Year Students]
  - Original: PLAY 100 Lives while having 5 (ex-)lst year students in your team.
  - Change: CLEAR 100 Lives while having 5 (ex-)lst year students in your team.
- [Title: 2nd Year Students]
  - Original: PLAY 100 Lives while having 5 (ex-)2nd year students in your team.
  - Change: CLEAR 100 Lives while having 5 (ex-)2nd year students in your team.
- [Title: 3rd Year Students]
  - Original: PLAY 100 Lives while having 5 3rd year students in your team.
  - Change: CLEAR 100 Lives while having 5 3rd year students in your team.
- [Title: Miyamasuzaka Students]
  - Original: PLAY 100 Lives while having 5 Miyamasuzaka students in your team.
  - Change: CLEAR 100 Lives while having 5 Miyamasuzaka students in your team.
- [Title: Kamiyama Students]
  - Original: PLAY 100 Lives while having 5 Kamiyama students in your team.
  - Change: CLEAR 100 Lives while having 5 Kamiyama students in your team.
- [Title: Boys Master]
  - Original: PLAY 100 Lives while having Tsukasa, Akito, Toya, Rui, Len, and KAITO in your team.
  - Change: CLEAR 100 Lives while having Tsukasa, Akito, Toya, Rui, Len, and KAITO in your team.
- [Mission: Leader Play]
  - Original: PLAY lives while having [featured character] as the leader in your team for a certain number of times.
  - Change: CLEAR lives while having [featured character] as the leader in your team for a certain number of times.

## Compensation;"Never Give Up" Compensation
Due to the changes in the requirements to get the title [Never Give Up], players who already have this Title will be given the amount of Crystals that have been used to get this Title.
### CompensationEligable;[Eligible Players]
- Players who have already made progress for the mission [Clear 1 live by using the "Continue" option at least 5 times] at least 1-4 times before v3.1.5.
- Players who already have the Title [Never Give Up] before v3.1.5.
### CompensationGiven;[Compensation Given]
- 10-50 Crystals (depending on your progress)
- Compensation will be given and automatically sent to your present box when you log in after updating the game to v3.2.0.
      `,
      tags: [],
    },
    {
      name: "Card Skill Level Shown During Lives",
      description: `
- Ever since v3.0.0 update, the cards' skill levels haven't been displayed when activated during lives. They will now be displayed.
- Cut-in displays and positions will also be adjusted to improve visibility during lives.

![Updated skill popup showing the level](https://pjsekai.sega.jp/master-data/image/news/news_thumb_423_EmAXffWPrF.png)
      `,
      tags: [],
    },
    {
      name: "Live Results Screen Adjustment",
      description: `
Ever since the 3rd anniversary renewal, the button tap and skip function in the live results screen haven't been as smooth, which is why adjustments will be made.
- Allow players to continue by tapping on the screen at the last result screen.
- Various animations such as rank-ups can be skipped by tapping.
- Make other players "Add Friend" and "Profile" buttons bigger.
      `,
      tags: [],
    },
    {
      name: "Song Difficulty Level Revisions",
      description: `
With the number of songs in the game reaching 35, and the addition of APPEND difficulty and TRACE notes, the devs have once again re-reviewed the overall difficulty level for MASTER songs. With this, some songs' difficulty levels will be revised.
> Please note that this will change only the difficulty levels written for the songs, there will be no changes to the actual charts.
## 26to27;MASTER 26 ↗ 27
- Time Machine
- Hello/How Are You
- Melty Land Nightmare
- Near
- alive
- from Y to Y
- 「１」
- Heartbeat #0822
## 27to28;MASTER 27 ↗ 28
- Charles
- Just Be Friends
- Hand in Hand
- Fragile
- Patchwork Staccato
- Tale of the Deep-sea Lily
- Love Trial
- Color of Drops
- Otome Dissection
- Once Upon a Dream
- Romeo & Cinderella
- Highlight
## 28to29;MASTER 28 ↗ 29
- Roki
- Viva Happy
- Nostalogic
- drop pop candy
- Night Sky Patrol of Tomorrow
- Melt
- World Is Mine
- becoming potatoes
- Newly Edgy Idols
- Bless Your Breath
- Wah Wah World
- Leia - Remind
- Dramaturgy
- Cendrillon 10th Anniversary
- As You Like It
- Cutlery
- ＊Hello, Planet.
- Bocca della Veritå
- Miku
- Beat Eater
- Journey
- Aun no Beats
- DREAM PLACE
- Love ka?
- Hoshizora Orchestra
- Flyway
- 39
- Manimani
## 29to30;MASTER 29 ↗ 30
- Hated By Life
- Miracle Paint
- Buriki no Dance
- Next Nest
- Dance Robot Dance
- Unknown Mother Goose
- KING
- Into the Night
- The Bubble Future
- magic number
- Vampire
- Stardust Utopia
- Rin-chan NOW!
## 30to31;MASTER 30 ↗ 31
- Close to gray
- Awaiting Clear Skies
- Devil's Manner
- Happy Halloween
- Pulse of the Meteor
- Cosmospice
- Gehenna
- Kimagure Mercy
- ONLINE GAME ADDICTS SPRECHCHOR
- Okochama Sensou
- Momoiro no Kagi
- Music Like Magic!
- Mr. Showtime
- Suki na Koto Dake de li Desu
## 32to33;MASTER 32 ↗ 33
- Lost One's Weeping
- Hatsune Creation Myth
- Ghost Rule
## 33to34;MASTER 33 ↗ 34
- The Intense Voice of Hatsune Miku
## 34to35;MASTER 34 ↗ 35
- Six Trillion Years and Overnight Story
- MACHINEGUN POEM DOLL

## 27to26;MASTER 27 ↘ 26
- Goodbye
- Copycat
- glow
- Aioi
## 28to27;MASTER 28 ↘ 27
- Sharing The World
- Melancholic
## 36to35;MASTER 36 ↘ 35
- Don't Fight The Music
      `,
      tags: [],
    },
    {
      name: "Other Bug Fixes",
      description: `
- [World Link] Fixed a bug that caused mismatch between the overall ranking display and Chapter Ts ranking display.
- [World Link] Fixed a bug where event pts were not reflected in the new Chapter when starting a live right before a Chapter switch and finish the same live after a Chapter switch.
- [Events, other than World Link] Fixed a bug where the "Rankings are being tallied" text wasn't displayed during the tallying period.
- Other minor bug fixes.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 11, 25),
  },
};

export default v3_2_0;
