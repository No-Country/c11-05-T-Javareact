import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './redux/store/store';
import { router } from './routes';
import Loader from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>
		</Provider>
	</React.StrictMode>
);
