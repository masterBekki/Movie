import { useReducer, useState } from 'react'

function reducer(state, action) {
	switch(action.type) {
		case "TOGGLE":
			return {autoplay: !state.autoplay}
		case "SLOW":
			return {autoplay: 500}
		case "FAST":
			return {autoplay: 900}
		case "UNIQUE_SPEED": 
			return {autoplay: action.payload}
		default:
			throw new Error()
	}
}

function init(initial) {

	return {autoplay: initial}
}

function App() {
	const initial = 700
	const [counter, setCounter] = useState(0)
	const [data, dispatch] = useReducer(reducer, initial, init)

	function changeCounter(i) {
		setCounter(counter => counter + i)
	}

	return (
		<>
			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
				<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'> 
					<div className='d-flex h-50 gap-2'>
						{arr.map(img => (
							<img src={img} alt={img} key={img} className='w-50' />
						))}
					</div>
					
					<h1>Counter: {counter}</h1>

					<p>{data.autoplay}</p>

					<div className='d-flex gap-2'>
						<button className='btn btn-primary' onClick={() => changeCounter(1)}>+</button>
						<button className='btn btn-success' onClick={() => changeCounter(-1)}>-</button>
						<button 
							className='btn btn-danger' 
							onClick={() => dispatch({type: "TOGGLE"})}
						>
							Toggle Autoplay
						</button>
						<button 
							className='btn btn-warning'
							onClick={() => dispatch({type: "SLOW"})}
						>
							Slow Autoplay
						</button>
						<button 
							className='btn btn-info'
							onClick={() => dispatch({type: "FAST"})}
						>
							Fast Autoplay
						</button>
						<button 
							className='btn btn-info'
							onClick={(e) => dispatch({type: "UNIQUE_SPEED", payload: +e.target.textContent})}
						>
							1000
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App


const arr = [
	"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
	"https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=800"
]