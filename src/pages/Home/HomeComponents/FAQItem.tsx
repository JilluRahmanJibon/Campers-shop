import { useState } from "react";

type FAQItemProps = {
	question: string;
	answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-gray-200 py-4">
			<div
				className="flex justify-between items-center cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}>
				<h3 className="text-lg font-semibold text-gray-900">{question}</h3>
				<button>
					{isOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20 12H4"
							/>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 4v16m8-8H4"
							/>
						</svg>
					)}
				</button>
			</div>
			{isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
		</div>
	);
};

export default FAQItem;
