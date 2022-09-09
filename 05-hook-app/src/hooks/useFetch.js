import { useEffect, useState } from 'react'

export function useFetch  (url) {


	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	})

	const getFetch = async () => {
		setState({
			...state,
			isLoading: true,
		})

		const resp = await fetch(url)
		const data = await resp.json()

		console.log('useFetch =>',data)
		setState({
			data: data,
			isLoading: false,
			hasError: null,
		})
	}

	useEffect(() => {
		getFetch()
	}, [url])

	//console.log('usefetch: return state=>',state)
	return {
		...state
	}
}

// export default useFetch