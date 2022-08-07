export interface Spacing {
  (): string;
  (value: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}

export function createSpacing(baseSpacing: number): Spacing {
  const spacing = (...argsInput: ReadonlyArray<number>): string => {
    const args = argsInput.length === 0 ? [1] : argsInput;

    return args.map((n) => `${baseSpacing * n}px`).join(" ");
  };

  return spacing;
}
