import { BarChart3, Cloud, Cpu, Search, Zap } from "lucide-angular";

  export const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Use-case & Data Review',
      description: 'We confirm goals, success metrics, and available data sources.',
      color: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      number: '02',
      icon: Zap,
      title: 'Prototype (POC)',
      description: 'We build a working demo to validate value and performance.',
      color: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      number: '03',
      icon: Cpu,
      title: 'Model Selection & Training',
      description: 'We apply fine-tuning or prompt + RAG based on what fits the problem.',
      color: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Evaluation & Improvement',
      description: 'We test outputs, reduce errors, and track quality improvements.',
      color: 'text-amber-600',
      borderColor: 'border-amber-200'
    },
    {
      number: '05',
      icon: Cloud,
      title: 'Deployment & Support',
      description: 'We integrate into your app, monitor results, and maintain the solution.',
      color: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];