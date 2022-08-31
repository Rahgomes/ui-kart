// import API from './ApiConfig';
import { positions, race } from 'mocks/index';

class Service {
	getComboPositions = () => {
		try {
			return positions;
		} catch (err) {
			throw err;
		}
	};

	getRace = async (params) => {
		try {
			const response = await race;
			return response;
		} catch (err) {
			throw err;
		}
	};
}

export default new Service();
