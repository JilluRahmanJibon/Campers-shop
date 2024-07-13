import TestimonialCard from "./TestimonialCard";

const testimonials = [
	{
		name: "John Doe",
		role: "CEO at Company",
		message:
			"This is the best product I have ever used. Highly recommend to everyone!",
		image_url: "https://example.com/images/john_doe.jpg",
	},
	{
		name: "Jane Smith",
		role: "Marketing Manager",
		message:
			"Fantastic quality and great customer service. I am very satisfied with my purchase.",
		image_url: "https://example.com/images/jane_smith.jpg",
	},
	{
		name: "Sam Wilson",
		role: "Developer",
		message:
			"A must-have for anyone in the market for this type of product. Excellent value for money.",
		image_url: "https://example.com/images/sam_wilson.jpg",
	},
];

const TestimonialsSection = () => {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">Testimonials</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} testimonial={testimonial} />
				))}
			</div>
		</div>
	);
};

export default TestimonialsSection;
