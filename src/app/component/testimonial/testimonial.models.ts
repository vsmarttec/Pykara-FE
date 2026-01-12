export interface Testimonial {
    id: number;
    author: string;
    position: string;
    company: string;
    companyLogo?: string;
    rating: number;
    quote: string;
    category: string;
    highlight?: string;
    date?: string;
    color?: 'blue' | 'purple' | 'green' | 'orange';
}

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 1,
        author: "Alex Morgan",
        position: "CTO",
        company: "TechScale Inc",
        rating: 5,
        category: "Quality and On-Time Results",
        quote: "Milestones were met, code reviews were thorough, and releases were stable. The final product matched the brief and performed well under load. We're confident recommending Pykara for web and AI projects.",
        highlight: "Confidently recommend for web and AI projects",
        date: "March 2024",
        color: "blue"
    },
    {
        id: 2,
        author: "Ravi",
        position: "Product Director",
        company: "V smart ",
        rating: 5,
        category: "Professional and Collaborative Approach",
        quote: "From our first engagement, Pykara Technologies worked as part of our team. Clear communication, regular demos, and quick iterations kept the project moving. Their blend of product sense and engineering skill made delivery smooth and predictable.",
        highlight: "Worked as part of our team",
        date: "February 2024",
        color: "purple"
    },
    {
        id: 3,
        author: "David Park",
        position: "Head of Engineering",
        company: "DataFlow Systems",
        rating: 5,
        category: "Adaptable and Responsive Team",
        quote: "Requirements changed mid-project and the team adjusted without drama. Turnaround times were swift, risks were highlighted early, and options were explained clearly. We always knew what was shipping next and why.",
        highlight: "Adjusted to changes without drama",
        date: "January 2024",
        color: "green"
    },
    {
        id: 4,
        author: "Maria Rodriguez",
        position: "CEO",
        company: "SmartRetail AI",
        rating: 5,
        category: "Reliable Products Delivery",
        quote: "Pykara took our data, ran a quick audit, and shipped a Intelligent solutions delivered in days. They added guardrails, dashboards, and an evaluation plan so results stayed consistent in production. The outcome: measurable gains and a clear roadmap for phase two.",
        highlight: "Intelligent solutions delivered in days",
        date: "December 2023",
        color: "orange"
    }
];