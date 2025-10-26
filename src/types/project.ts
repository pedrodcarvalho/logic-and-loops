export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly route: string;
  readonly icon?: string;
  readonly tags?: readonly string[];
}
