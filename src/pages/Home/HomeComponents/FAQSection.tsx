import FAQItem from "./FAQItem";

const faqs = [
	{
		question: "What is your return policy?",
		answer:
			"You can return any item within 30 days of purchase for a full refund.",
	},
	{
		question: "How long does shipping take?",
		answer: "Shipping usually takes 5-7 business days.",
	},
	{
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship to most countries around the world. Shipping costs will vary depending on the destination.",
	},
	{
		question: "How can I track my order?",
		answer:
			"Once your order has shipped, we will send you an email with the tracking information.",
	},
	{
		question: "Can I change or cancel my order?",
		answer:
			"You can change or cancel your order within 24 hours of placing it.",
	},
];

const FAQSection = () => {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">
				Frequently Asked Questions
			</h2>
			{faqs.map((faq, index) => (
				<FAQItem key={index} question={faq.question} answer={faq.answer} />
			))}
		</div>
	);
};

export default FAQSection;
