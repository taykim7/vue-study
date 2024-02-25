// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
import { Actions } from "./actions";

// 기본적으로 정의되어 있는 class에 commit을 재정의하기 위한 타입 정의
// - key를 받고 그 key의 두 번째 파라미터(payload)를 가져오겠다.
// - ReturnType으로 반환타입도 추론
type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions // commit
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions // dispatch
  ): ReturnType<Actions[K]>;
};

// Mystore 타입을 export
export type MyStore = Omit<Store<RootState>, "commit" | "dispatch"> &
  MyMutations &
  MyActions;

// Omit은 특정 타입에서 지정된 속성만 제거한 타입을 정의해 줍니다.
// &는 속성 합집합
// 즉, commit, dispatch 속성을 제외한 Store 타입에
// MyMutations, MyActions 타입을 더한 것
