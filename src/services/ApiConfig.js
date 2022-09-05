import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const headers = {
	'x-api-key': '299c99c7-d3e3-4724-9f5e-be90661e3889',
	ContentType: 'application/json',
};

export default axios.create({
	baseURL,
	headers,
});
