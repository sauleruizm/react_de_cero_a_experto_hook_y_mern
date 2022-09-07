import React from 'react'
import useFetch  from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

	let { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1')

	console.log({ data, isLoading, hasError })

	return (
		<>
			<div>Brakin Bad Quote</div>
			<hr/>
			{isLoading}
		</>
	)
}
