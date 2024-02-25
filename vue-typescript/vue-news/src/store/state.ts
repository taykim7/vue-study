import { NewsItem } from "@/api";

// state.ts
const state = {
  news: [] as NewsItem[],
};

// state 타입
type RootState = typeof state;

export { state, RootState };
