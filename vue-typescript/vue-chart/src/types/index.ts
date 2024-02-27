import Vue from "vue";
import { VueConstructor } from "vue/types/umd";

// export default (
//   Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
// ).extend({

// { $refs: { myChart: HTMLCanvasElement } 이 부분을 바꿔끼우면 된다.

// type MyVue<T> = VueConstructor<Vue & T>; ==> 이런식으로 만들면 된다

// 필요에 따라 refs로 입맛대로 만든다.
export type MyVueRefs<T> = VueConstructor<Vue & { $refs: T }>;
