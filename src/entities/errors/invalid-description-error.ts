export class InvalidDescriptionError extends Error {
  readonly name = 'InvalidDescriptionError';
  constructor(description: string) {
    super(`Invalid description: ${description}.`);
  }
}
