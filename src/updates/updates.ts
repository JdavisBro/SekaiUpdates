import { UpdateType } from "../types/UpdateType.ts";

const modules = import.meta.glob<{ default: UpdateType }>("./v*.ts", {
  eager: true,
});

const updates: UpdateType[] = Object.values(modules).map(
  (value) => value.default,
);

if (import.meta.env.MODE == "development") {
  import("./testingVersion.ts").then((testingVersion) => {
    updates.push(testingVersion.default);
  });
}

export default updates;
