import API from './ApiConfig';
import { headers } from './ApiConfig';
import { positions } from 'mocks/index';
import expireDate from 'utils/expireCookieRace';

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
			document.cookie = `token=${JSON.stringify(bearer.data.token)};expires=${expireDate.toUTCString()}`;
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
