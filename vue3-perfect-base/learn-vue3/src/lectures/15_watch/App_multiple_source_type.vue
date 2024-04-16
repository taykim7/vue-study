<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// 반응형 객체
		const obj = reactive({
			count: 0,
		});

		// ○ 매개변수가 ref 타입일 경우
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// ○ 매개변수가 array 타입일 경우
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// ○ 매개변수가 반응형 객체의 한 속성(obj.count)만 넘기면 동작안함!
		console.log(typeof obj.count); // 왜냐면 반응형 객체가 아닌 그냥 number기 때문에
		// 그러면 getter 함수를 활용 ( () => obj.count )
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue: ', newValue);
		// 	},
		// );

		// ○ 매개변수가 반응형 객체일 경우 (단, newValue와 oldValue가 같음)
		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue: ', newValue);
		// 	console.log('oldValue: ', oldValue);
		// });

		// 반응형 객체를 직접 watch() 하면 암시적으로 깊은 감시자가 생성된다.
		// 즉, 속성 뿐만 아니라 *모든 중첩된 속성에도 트리거가 된다.
		// getter 함수로 객체를 넘기면 객체의 값이 바뀔 경우에만 트리거 된다.***

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});
		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });
		console.log(typeof person.obj);
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
