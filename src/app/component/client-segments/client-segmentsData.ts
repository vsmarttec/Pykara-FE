export interface ClientSegment {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    iconColor: string;

    tech?: string
}


export const clientSegmentsdata: ClientSegment[] = [

    {
        id: 1,
        title: 'Startups',
        description: 'Helping founders turn ideas into stable, scalable products.',
        icon: '🚀',
        color: 'bg-blue-50',
        iconColor: 'text-blue-600',
        tech: "End-to-end product collaboration"
    },
    {
        id: 2,
        title: 'Small & Medium Businesses',
        description: 'Improving systems, automation, and digital presence.',
        icon: '🏢',
        color: 'bg-green-50',
        iconColor: 'text-green-600',
        tech: 'Digital growth support'
    },
    {
        id: 3,
        title: 'Product Companies',
        description: 'Supporting continuous development, upgrades, and performance improvements.',
        icon: '📈',
        color: 'bg-purple-50',
        iconColor: 'text-purple-600',
        tech: 'Ongoing product engineering'
    },
    {
        id: 4,
        title: 'Enterprises',
        description: 'Building secure, reliable solutions aligned with business processes.',
        icon: '🏛️',
        color: 'bg-amber-50',
        iconColor: 'text-amber-600',
        tech: 'Enterprise-grade solution delivery'
    }
];