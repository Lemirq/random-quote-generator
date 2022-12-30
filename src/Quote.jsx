import React from 'react';
import { FaQuoteLeft, FaTwitter, FaTumblr } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const Quote = ({ quote, color, bgColor, newQ }) => {
	return (
		<div
			id="quote-box"
			className="bg-white rounded-xl max-w-2xl py-4 px-8 md:py-10 md:px-20 w-full sm:w-3/4 flex justify-center items-center flex-col gap-10"
		>
			<AnimatePresence>
				<motion.h1
					key={1}
					id="text"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className={`text-2xl ${color}`}
				>
					<FaQuoteLeft color={color} size={30} />
					{quote.content}
				</motion.h1>
				<motion.p
					key={2}
					id="author"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-xl w-full flex justify-end text-slate-500"
				>
					- {quote.author}
				</motion.p>
			</AnimatePresence>
			<div className="w-full flex justify-between items-center gap-4 flex-col sm:flex-row sm:gap-0">
				<div className="flex justify-center items-center flex-row gap-3">
					<motion.a
						href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.content} - ${quote.author}`}
						target="_blank"
						rel="noreferrer"
						id="tweet-quote"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className={`text-white px-3 py-2 rounded-md ${bgColor}`}
					>
						<FaTwitter size={30} />
					</motion.a>
					<motion.a
						href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.author}&content=${quote.content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
						target="_blank"
						rel="noreferrer"
						id="tumblr-quote"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className={`text-white px-3 py-2 rounded-md ${bgColor}`}
					>
						<FaTumblr size={30} />
					</motion.a>
				</div>
				<motion.button
					id="new-quote"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className={`px-3 py-2 text-white rounded-md ${bgColor}`}
					onClick={newQ}
				>
					New Quote
				</motion.button>
			</div>
		</div>
	);
};

export default Quote;
