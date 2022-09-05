import API from './ApiConfig';
import { headers } from './ApiConfig';
import { positions, race } from 'mocks/index';

class Service {
	getComboPositions = () => {
		try {
			return positions;
		} catch (err) {
			throw err;
		}
	};

	getToken = async (params) => {
		try {
			const bearer = await API.post(`/auth/login`, params);
			// window.localStorage.setItem('token', JSON.stringify(bearer.data.token));
			let now = new Date();
			now.setTime(now.getTime() + 21 * 3600 * 1000);
			// console.log(now.toUTCString());

			document.cookie = `token=${JSON.stringify(bearer.data.token)};expires=${now.toUTCString()}`
			return bearer.data.token;
		} catch (err) {
			throw err;
		}
	};

	getRace = async (params) => {
		try {
			const response = await API.get(`/api/racing/racer/status`, {
				params,
				headers: { ...headers, Authorization: `Bearer ${params.bearer}` },
			});
			return response.data;
		} catch (err) {
			throw err;
		}
	};
}

export default new Service();
