import axios from 'axios';
import { ref, unref, watchEffect, isRef } from 'vue';

// deafults 속성에 정의하면 전체 적용이 된다. (baseURL 설정)
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

// GET을 디폴트
const defaultsConfig = {
	method: 'get',
};

const defaultOptions = {
	immediate: true,
};

// ○ useAxios 함수 정의
// (1) 외부로부터 받는 파라미터는 url, config
// (2) config는 구조분해 할당을 위해 빈객체를 디폴트로 설정 (undefined로 넘어오면 에러방지)
export const useAxios = (url, config = {}, options = {}) => {
	// (3) 공통적으로 사용할 상태들
	// (4) header를 전달하기 위해 response를 통째로 전달한다.
	const response = ref(null);
	const data = ref(null);
	const loading = ref(false);
	const error = ref(null);

	const { onSuccess, onError, immediate } = { ...defaultOptions, ...options };

	// (5) ref 반응형 객체인 config의 params
	const { params } = config;

	// ○ 내부 execute 함수 정의
	const execute = body => {
		// (6) 데이터 초기화
		data.value = null;
		error.value = null;

		// ○ axios 함수 사용
		// axios(config), axios(url, [config])
		// (7) cofig는 url, method, params, data 등 다양한 속성이 존재한다.
		// (8) ref로 받은 config의 params 래핑을 unref로 해제
		// (9) config에 methods가 있으면 덮어쓰기, 없으면 defaultsConfig의 get으로 호출한다.
		loading.value = true;
		axios(url, {
			...defaultsConfig,
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				// 호출 성공
				response.value = res;
				data.value = res.data;
				// 성공할때 호출할 콜백함수
				if (onSuccess) {
					onSuccess(res);
				}
			})
			.catch(err => {
				// 호출 실패
				error.value = err;
				// 실패할때 호출할 콜백함수
				if (onError) {
					onError(err);
				}
			})
			.finally(() => {
				loading.value = false;
			});
	};

	// ○ execute 함수 호출
	// (10) config의 params가 반응형 데이터가 아닐 경우의 케이스를 처리한다.
	if (isRef(params)) {
		// (11) 반응형 객체가 맞다면
		// 페이지 변경시 새로 호출 (반응형 데이터 변경 시 새로 호출)
		// watch와 다르게 초기 1번 바로 실행함
		watchEffect(execute);
	} else {
		// (12) 아니라면 한번만 호출
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
