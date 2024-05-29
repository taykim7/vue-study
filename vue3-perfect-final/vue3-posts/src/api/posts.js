import axios from 'axios';

// axios로 json 데이터 조회

// db.json으로 교체
// const posts = [
// 	{ id: 1, title: '제목1', content: '내용1', createdAt: '2020-01-01' },
// 	{ id: 2, title: '제목2', content: '내용2', createdAt: '2020-02-02' },
// 	{ id: 3, title: '제목3', content: '내용3', createdAt: '2020-03-03' },
// 	{ id: 4, title: '제목4', content: '내용4', createdAt: '2020-04-04' },
// 	{ id: 5, title: '제목5', content: '내용5', createdAt: '2020-05-05' },
// ];

// 목록
export function getPosts(params) {
	return axios.get('http://localhost:5000/posts', { params });
}

// 조회
export function getPostById(id) {
	return axios.get(`http://localhost:5000/posts/${id}`);
}

// 등록
export function createPost(data) {
	return axios.post(`http://localhost:5000/posts/`, data);
}

// 수정
export function updatePost(id, data) {
	return axios.put(`http://localhost:5000/posts/${id}`, data);
}

// 삭제
export function deletePost(id) {
	return axios.delete(`http://localhost:5000/posts/${id}`);
}
