/* eslint-disable @typescript-eslint/no-namespace */

// 즉, 현재는 EventTarget 이나 null 이라서 HTMLInputElement 타입을 활용해야해서
// 호환할 수 있도록 해주는 유틸타입을 만들어보자

export namespace VueEvent {
  // ### 5. 유틸타입 Input에 기존에 있는 InputEvent를 가져오고
  // 내가 정의할 Input에 제네릭 타입 추가
  // export interface Input<T> extends InputEvent {
  //   target: T;
  // 근데 타입의 위계에 의해 에러가 생김...
  // 즉, InputEvent의 부모 UIEvent의 부모 Event에 target 속성이 이미 정의되어 있음.

  // ### 6. 그러니까 새로 정의하는 방식이 아닌 "확장" 해줘야함
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
    // 이미 정의가 되어 있는 target 속성의 타입과 호환되어야함
  }
}

// export로 인해 VueEvent.Input로 접근하면 됨
