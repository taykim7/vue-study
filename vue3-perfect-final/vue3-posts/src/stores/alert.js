import { defineStore } from 'pinia';

// Alert 관련 중앙저장소
export const useAlertStore = defineStore('alert', {
	state: () => ({
		// Alert 상태
		alerts: [],
	}),
	actions: {
		vAlert(message, type = 'error') {
			this.alerts.push({ message, type });
			setTimeout(() => {
				this.alerts.shift();
			}, 2000);
		},
		vSuccess(message) {
			this.vAlert(message, 'success');
		},
	},
});
