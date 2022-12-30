import React, { useState, useEffect } from 'react';
import Quote from './Quote';
function App() {
	const bgColors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
	const textColors = ['text-red-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-purple-500', 'text-pink-500'];
	const [RandomIndex, setRandomIndex] = useState(Math.floor(Math.random() * bgColors.length));
	const [bgColor, setbgColor] = useState(bgColors[RandomIndex]);
	const [textColor, settextColor] = useState(textColors[RandomIndex]);
	const [quote, setQuote] = useState({
		content: '',
		author: '',
	});
	const randomColor = () => {
		let rand = Math.floor(Math.random() * bgColors.length);
		console.log(rand, RandomIndex);
		while (rand === RandomIndex) {
			rand = Math.floor(Math.random() * bgColors.length);
		}
		console.log(rand);
		setRandomIndex(rand);
		setbgColor(bgColors[rand]);
		settextColor(textColors[rand]);
	};
	const newQuote = () => {
		randomColor();
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				setQuote({
					content: data.content,
					author: data.author,
				});
			});
	};

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.code === 'Space' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'ArrowRight' || e.code === 'ArrowDown') {
				newQuote();
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return function cleanup() {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	useEffect(() => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				setQuote({
					content: data.content,
					author: data.author,
				});
			});
	}, []);

	const handleSpace = (e) => {
		console.log('asfk');
		if (e.code === 'Space') {
			newQuote();
		}
	};

	return (
		<div onKeyDown={handleSpace} className={`app w-screen h-screen flex px-5 sm:px-0 justify-center items-center gap-4 flex-col ${bgColor}`}>
			<Quote color={textColor} bgColor={bgColor} quote={quote} newQ={newQuote} />
			<a href="https://lemirq.github.io">by Vihaan</a>
		</div>
	);
}

export default App;
