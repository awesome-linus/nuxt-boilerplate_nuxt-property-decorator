export type Count = {
  count: string;
};

export interface FetchCount {
  (count: string): Promise<Count>;
}
