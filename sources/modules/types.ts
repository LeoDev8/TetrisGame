export interface PointInterface {
  readonly x: number;
  readonly y: number;
}

export interface ViewerInterface {
  show(): void;
  remove(): void;
}
