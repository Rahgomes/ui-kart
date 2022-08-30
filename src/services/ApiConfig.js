import axios from 'axios';

// const baseURL =
// 	(window._baseUrl.includes('localhost') ? process.env.REACT_APP_BASE_URL : window._baseUrl) +
// 	process.env.REACT_APP_BASE_CONTEXT;

export default axios.create({
	// baseURL,
	headers: {
		ContentType: 'application/json',
	},
});
