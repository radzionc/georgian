export const without = <T>(items: readonly T[], item: T) =>
  items.filter((i) => i !== item)
