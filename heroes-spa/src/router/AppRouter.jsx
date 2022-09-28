import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import {HeroesRoutes } from '../heroes'

export const AppRouter = () => {
	return (
		<>
			{/* <Navbar /> */}

			<Routes>
				<Route path='login' element={<LoginPage />} />
				<Route path='/*' element={<HeroesRoutes />} />
			</Routes>
		</>
	)
}
