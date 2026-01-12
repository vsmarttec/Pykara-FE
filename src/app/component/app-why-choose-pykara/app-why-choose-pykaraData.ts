
export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const reasons: Reason[] = [
    {
        id: 1,
        title: 'Clear Communication',
        description: 'Realistic commitments and transparent communication throughout the project.',
        icon: '💬',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 2,
        title: 'Experienced Team',
        description: 'Stable development team with hands-on experience across multiple technologies.',
        icon: '👥',
        color: 'bg-green-50 text-green-600'
    },
    {
        id: 3,
        title: 'Quality Focus',
        description: 'Emphasis on quality, security, and maintainability of all solutions.',
        icon: '🛡️',
        color: 'bg-purple-50 text-purple-600'
    },
    {
        id: 4,
        title: 'Practical Solutions',
        description: 'Implementing proven solutions instead of experimental shortcuts.',
        icon: '🎯',
        color: 'bg-amber-50 text-amber-600'
    },
    {
        id: 5,
        title: 'Long-term Support',
        description: 'Ongoing support and knowledge continuity for sustained success.',
        icon: '🔄',
        color: 'bg-indigo-50 text-indigo-600'
    },
    {
        id: 6,
        title: 'Reliable Partnership',
        description: 'Committed to being a dependable technology partner for your business.',
        icon: '🤝',
        color: 'bg-rose-50 text-rose-600'
    }
];

export const principles: string[] = [
    'Clarity in requirements and expectations',
    'Discipline in development processes',
    'Consistent execution and delivery',
    'Security-first approach',
    'Scalable architecture design'
];