export default {
	install(app, options) {
		const person = {
			name: '테이',
			say() {
				alert(this.name);
			},
			...options,
		};

		// 위 객체를 애플리케이션 전역으로 추가
		app.config.globalProperties.$person = person;
		// 주입 (setup에서 사용 가능) - 가져올 땐 inject로 가져온다
		app.provide('person', person);
	},
};
