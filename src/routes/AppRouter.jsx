import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LapTime from 'ui/lapTime';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route index path="/" element={<LapTime />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</Router>
	);
};

export default AppRouter;
