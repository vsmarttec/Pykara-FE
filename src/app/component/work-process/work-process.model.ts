
export interface WorkProcess {
    id: string;
    title: string;
    description?: string;
    features: string[];
    order: number;
    animationDelay?: string;
    highlight?:string
}

export const WORK_PROCESS_DATA: WorkProcess[] = [
    {
        id: 'team',
        title: 'Expert Team',
        order: 1,
        description: 'Senior engineers delivering clean, maintainable code.',
         highlight: 'Steady output, fewer surprises, and software that is easy to maintain',
        features: ['Clear ownership', 'Full collaboration', 'Code reviews', 'Single contact']
    },
    {
        id: 'process',
        title: 'Quality Process',
        order: 2,
        description: 'Built-in quality with automated testing and clear designs.',
         highlight: 'Quality is built in through automated tests and repeatable processes',
        features: ['Requirements first', 'Automated testing', 'Security checks', 'Full documentation']
    },
    {
        id: 'delivery',
        title: 'Agile Delivery',
        order: 3,
        description: 'Fast, flexible sprints with data-driven improvements.',
        highlight: 'Small, reversible, and safe releases for faster value delivery',
        features: ['Regular sprints', 'Early delivery', 'Priority flexibility', 'Continuous improvement']
    }
];