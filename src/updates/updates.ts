import { UpdateType } from "../types/UpdateType.ts";

const modules = import.meta.glob<{ default: UpdateType }>("./v*.ts", {
  eager: true,
});

const updates: UpdateType[] = Object.values(modules).map(
  (value) => value.default,
);

export default updates;
