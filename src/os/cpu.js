import { cpus } from "node:os";

export const cpu = () => {
  const howManyCPU = cpus().length;
  const model = cpus().map((item) => ({
    Model: item.model,
    "Clock rate": item.speed / 1000 + "GHz",
  }));
  console.log(`Quantity of CPUS - ${howManyCPU}`);
  console.table(model);
};
