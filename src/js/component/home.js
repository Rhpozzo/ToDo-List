import React, { useState } from "react";

export function Home() {
	const [todos, setTodos] = useState([]);

	const [tempValue, setTempValue] = useState([]);

	return (
		<div className="container">
			<div className="titles">
				<span className="ToDo">ToDo </span>
				<span className="list">List!</span>
			</div>
			<div>
				<p className="subtitle">Keep up with your daily tasks!</p>
			</div>
			<input
				className="todoInput"
				set
				type="text"
				value={tempValue}
				onChange={e => setTempValue(e.target.value)}
				onKeyPress={e => {
					if (e.charCode === 13) {
						setTodos(todos.concat(tempValue));

						setTempValue("");
					}
				}}
			/>

			{/* <button className="btn">Submit</button> */}
			<ul className="listContainer">
				{todos.map((t, i) => (
					<li className="listItem" key={i} value={""}>
						{t + " "}
						<button
							className="done-button"
							onClick={() =>
								setTodos(todos.filter((item, f) => i != f))
							}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
