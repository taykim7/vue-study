import focus from './focus';

export default {
	install(app) {
		// 여러 커스텀 디렉티브 등록
		app.directive('focus', focus);
	},
};
