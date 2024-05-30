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
export const posts = create('http://localhost:5000/posts/');

// 다른 api를 여기에 추가하면 된다.
