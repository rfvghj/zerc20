export type TMandLAPM = {
  TM: number;
  LAPM: number;
};
export interface TabelColumns {
  tick: string;
  contract: string;
  deployTime: string;
  TMandLAPM: TMandLAPM;
  rollupSize: number;
  frozenTime: string;
  condition: string;
  fundingRate: number;
  progress: number;
}
