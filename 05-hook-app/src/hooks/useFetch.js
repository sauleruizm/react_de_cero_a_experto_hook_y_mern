import { useEffect, useState } from 'react'

const  useFetch = async (url) => {


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

		console.log(data)
		setState({
			data,
			isLoading: false,
			hasError: null,
		})
	}

	useEffect(() => {
		getFetch()
	}, [url])

	console.log(state)
	return {
		...state,
	}
}

export default useFetch