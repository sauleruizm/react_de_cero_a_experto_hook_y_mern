import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import {HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import PublicRouter from './PublicRouter'

export const AppRouter = () => {
	return (
		<>
			{/* <Navbar /> */}

			<Routes>
				{/* <Route path='login' element={<LoginPage />} /> */}

				<Route path='login' 
					element= {
						<Routes>
							<Route path='/*' element={<LoginPage />} />
						</Routes>
					}
				/>

				<Route path='/*' element={<PrivateRoute>
					<HeroesRoutes/>
				</PrivateRoute>
			} />
				{/* <Route path='/*' element={<HeroesRoutes />} /> */}
			</Routes>
		</>
	)
}
