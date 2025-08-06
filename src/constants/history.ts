import historyData from "./history.json";

export interface IHistory {
  year: number;
  desc: string[];
}

export const HISTORY_LIST: IHistory[] = historyData.history;
