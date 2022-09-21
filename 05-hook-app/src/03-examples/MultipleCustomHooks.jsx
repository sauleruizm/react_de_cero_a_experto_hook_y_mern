import React from 'react'
import { useCounter, useFetch} from '../hooks/index'
import {LoadingQuote, Quote} from './index'



export const MultipleCustomHooks = () => {

	const {counter, increment} = useCounter(1)
	const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
	const { author, quote} = !!data && data[0]
	

	return (
		<>
			<div>Braking Bad Quote</div>
			<hr/>
			{
				isLoading 
				? <LoadingQuote/>
				:<Quote quote={quote} author={author}/>

			}
			<button 
				className='btn btn-primary'
				disabled={ isLoading }
				onClick={()=> {increment()}}>
				Next quote
			</button>
		</>
	)
}
