// 메서드를 갖고있는 객체로 작성
const objPlugins = {
	install(app, options) {
		console.log('객체로 작성한 플러그인 / app');
		console.log(app);
		console.log(options); // {name: 'tay'}

		// (1) 전역 컴포넌트 추가 - app.component()
		// (2) 전역 애플리케이션 인스턴스에 속성 추가 - app.config.globalProperites
		// (3) 커스텀 디렉티브 추가 - app.directive
		// (4) 다양한 리소스를 자식 컴포넌트에서 사용할 수 있도록 추가 - app.provide()
	},
};
export default objPlugins;
