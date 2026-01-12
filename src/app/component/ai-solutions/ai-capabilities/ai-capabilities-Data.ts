import { Eye, MessageSquare, TrendingUp, Workflow } from "lucide-angular";

export const capabilities = [
    {
        icon: TrendingUp,
        title: 'Predictive Analytics',
        description: 'Forecasting and risk insights using machine learning models trained on business data.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: MessageSquare,
        title: 'NLP & Chatbots',
        description: 'RAG-based assistants, text classification, extraction, and domain chat solutions.',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: Eye,
        title: 'Computer Vision',
        description: 'Image and document analysis for inspection, recognition, and automation.',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
    },
    {
        icon: Workflow,
        title: 'AI Automation',
        description: 'AI-driven workflows that reduce manual work and improve consistency.',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50'
    }
];