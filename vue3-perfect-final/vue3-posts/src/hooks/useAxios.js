import axios from 'axios';
import { ref, unref, watchEffect, isRef } from 'vue';

// deafults 속성에 정의하면 전체 적용이 된다. (baseURL 설정)
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

// Axios 요청 메소드는 get을 default로 설정한다.
const defaultsConfig = {
	method: 'get',
};

const defaultOptions = {
	immediate: true,
};

// ○ useAxios 함수 정의
// 파라미터 : url, config
// config : 구조분해 할당을 위해 빈객체({})를 디폴트 매개변수로 설정 (undefined로 넘어올때 발생할 에러방지)
// options : 파라미터로 받을 경우 defaultOptions을 대체한다.
export const useAxios = (url, config = {}, options = {}) => {
	// 공통적으로 사용할 상태들
	// response : header를 전달하기 위해 응답 response를 통째로 전달한다.
	const response = ref(null);
	const data = ref(null);
	const loading = ref(false);
	const error = ref(null);

	// 1차로 defaultOptions에서 해당 값을 가져오고, 2차로 options에서 가져온다.
	const { onSuccess, onError, immediate } = { ...defaultOptions, ...options };

	// config의 params를 가져온다.
	const { params } = config;

	// ○ 내부 execute 함수 정의
	const execute = body => {
		// 데이터 초기화
		data.value = null;
		error.value = null;

		// ○ axios 함수 사용
		// cofig : url, method, params, data 등 다양한 속성이 존재한다.
		// 1차로 defaultsConfig를 가져와서 기본 method를 설정, 2차로 config를 가져와서 methods가 있으면 대체한다.
		// config의 params의 반응형 객체 상태인 ref을 unref로 해제
		loading.value = true;
		axios(unref(url), {
			...defaultsConfig,
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				// 호출 성공
				response.value = res;
				data.value = res.data;
				// 호출 성공 + onSuccess를 수신한 경우 호출할 콜백함수
				if (onSuccess) {
					onSuccess(res);
				}
			})
			.catch(err => {
				// 호출 실패
				error.value = err;
				// 호출 실패 + onError를 수신한 경우 호출할 콜백함수
				if (onError) {
					onError(err);
				}
			})
			.finally(() => {
				// 로딩 끄기
				loading.value = false;
			});
	};

	// ○ execute 함수 호출
	// config의 params가 반응형 데이터가 아닐 경우의 케이스를 처리한다.
	if (isRef(params) || isRef(url)) {
		// 반응형 객체인 ref가 맞다면 watchEffect 등록
		// 페이지 변경시 새로 execute가 호출된다. (반응형 데이터 변경 시 새로 호출)
		// watch와 다르게 초기 1번 바로 실행함
		watchEffect(execute);
	} else {
		// 반응형 객체인 ref가 아니라면 execute 한번만 호출
		if (immediate) {
			execute();
		}
	}

	return {
		response,
		data,
		error,
		loading,
		execute,
	};
};
