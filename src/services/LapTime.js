// import API from './ApiConfig';
import { positions } from 'mocks/index';

class Service {
	getComboPositions = () => {
		try {
			return positions;
		} catch (err) {
			throw err;
		}
	};
}

export default new Service();
