export type Res = {
  width: number;
  height: number;
  path: string;
  format: 'webp' | 'png' | 'jpeg' | 'WEBP' | 'PNG' | 'JPEG';
};
export type MultiRes = Res[];
