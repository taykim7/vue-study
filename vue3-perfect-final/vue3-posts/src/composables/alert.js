// composable 함수를 만들 땐 대부분 use를 붙힌다.
import { ref } from 'vue';

export function useAlert() {
	const alerts = ref([]);
	const vAlert = (message, type = 'error') => {
		alerts.value.push({ message, type });
		setTimeout(() => {
			alerts.value.shift();
		}, 2000);
	};
	const vSuccess = message => vAlert(message, 'success');
	return {
		alerts,
		vAlert,
		vSuccess,
	};
}
