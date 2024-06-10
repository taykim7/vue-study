import focus from './focus';
import color from './color';

export default {
	install(app) {
		// 여러 커스텀 디렉티브 등록
		app.directive('focus', focus);
		app.directive('color', color);
	},
};
