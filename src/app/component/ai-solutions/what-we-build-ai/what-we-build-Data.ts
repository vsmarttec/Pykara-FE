import { Brain, CheckCircle, MessageSquare, Shield, Target, Workflow } from "lucide-angular";

export const features = [
    {
        icon: MessageSquare,
        title: 'RAG-based Knowledge Assistants',
        description: 'Chatbots that answer using your documents and data, with controlled and relevant responses.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: Brain,
        title: 'Custom Fine-Tuned Models',
        description: 'Fine-tuning models for domain-specific language, scoring, classification, or extraction tasks.',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: Workflow,
        title: 'Advanced Workflows & Automation',
        description: 'Automation that connects system outputs with approvals, reports, and dashboards.',
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
    }
];

export const principles = [
    { icon: CheckCircle, text: 'Accuracy-focused development', color: 'text-green-600' },
    { icon: Shield, text: 'Reliable production deployment', color: 'text-blue-600' },
    { icon: Target, text: 'Clear outcome measurement', color: 'text-orange-600' }
];
