import dayjs from 'dayjs';

export default {
	// install로 플러그인화
	install(app) {
		// 컴포넌트 인스턴스에서 전체적으로 접근할 수 있도록 설정
		app.config.globalProperties.$dayjs = dayjs;
		// setup함수에서도 접근할 수 있도록 제공
		app.provide('dayjs', dayjs);
	},
};
