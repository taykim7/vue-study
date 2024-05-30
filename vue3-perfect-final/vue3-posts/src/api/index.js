import axios from 'axios';

// axios의 create함수를 활용하여 인스턴스를 생성해주는 함수
// function create(baseURL, options) {
// 	const instance = axios.create({
// 		baseURL: baseURL,
// 		...options,
// 	});
// 	return instance;
// }

// assign 으로 더 간단하게
function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

// post api
// export const posts = create('http://localhost:5000/posts/');
// 환경변수 활용
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

// 다른 api를 여기에 추가하면 된다.

// development http://localhost:5000/posts/
// production : http://localhost:5001/posts/
