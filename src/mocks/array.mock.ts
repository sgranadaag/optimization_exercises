export const smallNumbers = [1, 2, 3, 4, 5];

export const smallStrings = ["a", "b", "c", "d"];

export const smallMixed = [1, "2", true, null, undefined];

export const mediumNumbers = Array.from({ length: 100 }, (_, i) => i);

export const smallRandom = Array.from(
  { length: 1000 },
  () => Math.floor(Math.random() * 100)
);

export const mediumRandom = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 1000)
);

export const largeSequential = Array.from(
  { length: 100_000 },
  (_, i) => i
);

export const largeRandom = Array.from(
  { length: 100_000 },
  () => Math.floor(Math.random() * 1_000_000)
);

export const hugeSequential = Array.from(
  { length: 1_000_000 },
  (_, i) => i
);

export const duplicatesHeavy = [
  ...Array(500).fill(1),
  ...Array(500).fill(2),
  ...Array(500).fill(3)
];

export const sortedAsc = Array.from({ length: 1000 }, (_, i) => i);

export const sortedDesc = Array.from({ length: 1000 }, (_, i) => 1000 - i);

export const unsorted = sortedAsc
  .slice()
  .sort(() => Math.random() - 0.5);

export const partialA = Array.from({ length: 1000 }, (_, i) => i);

export const partialB = Array.from({ length: 1000 }, (_, i) => i + 500);

export const usersA = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User-${i}`
}));

export const usersB = Array.from({ length: 1000 }, (_, i) => ({
  id: 999 - i,
  name: `User-${999 - i}`
}));
