export class MissingParamError extends Error {
  readonly name = 'MissingParamError';
  constructor(param:string) {
    super(`Missing parameter from request: ${param}.`);
  }
}
