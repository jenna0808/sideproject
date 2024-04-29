export interface MCode {
  label: string;
  code?: string;
}
export interface ITemplate extends MCode {
  path: string;
  element: React.ReactNode;
}
