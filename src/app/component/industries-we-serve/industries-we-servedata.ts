
export interface Industry {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    gradient: string;
}
export const industries: Industry[] = [
    {
        id: 1,
        title: 'E-Learning & Education',
        description: 'Learning platforms, assessments, and AI-assisted tools.',
        icon: '🎓',
        color: 'bg-indigo-50',
        gradient: 'from-indigo-500 to-purple-600'
    },
    {
        id: 2,
        title: 'FinTech & Trading',
        description: 'Data analysis, dashboards, and decision-support systems.',
        icon: '📊',
        color: 'bg-emerald-50',
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 3,
        title: 'SaaS Platforms',
        description: 'Web applications, APIs, and cloud-based systems.',
        icon: '☁️',
        color: 'bg-blue-50',
        gradient: 'from-blue-500 to-cyan-600'
    },
    {
        id: 4,
        title: 'Business Automation',
        description: 'Workflow tools, reporting systems, and internal platforms.',
        icon: '⚙️',
        color: 'bg-amber-50',
        gradient: 'from-amber-500 to-orange-600'
    }
];
