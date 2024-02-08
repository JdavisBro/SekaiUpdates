import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const testingVersion: UpdateType = {
  version: "Test",
  description: "Features for Testing",
  features: [
    {
      name: "Headers and Table of Contents/slashtest",
      description: `
# h1.1;h1.1
[link to h3.3](h#h3.3)
## h2.1;h2.1
### h3.1;h3.1
### h3.2;h3.2
### h3.3;h3.3
### h3.4;h3.4
### h3.5;h3.5
#### h4.1;h4.1
### h3.6;h3.6
#### h4.2;h4.2
##### h5.1;h5.1
###### h6.1;h6.1
# h1.2;h1.2
### h3.7;h3.7 (don't do this)
# h1.3;h1.3
###### h6.2;h6.2 (don't do this)
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(1992, 0, 1),
  },
};

export default testingVersion;
