import { Cpu, Database, Network, Settings } from "lucide-angular";

export const technologies = [
    {
        icon: Cpu,
        title: 'LLMs & Foundation Models',
        items: ['GPT-4', 'Claude', 'Llama', 'Custom fine-tuned'],
        color: 'text-blue-600'
    },
    {
        icon: Database,
        title: 'Vector Databases & Embeddings',
        items: ['Pinecone', 'Weaviate', 'pgvector', 'Text Representation Vectors'],
        color: 'text-purple-600'
    },
    {
        icon: Network,
        title: 'RAG Architecture',
        items: ['Document chunking', 'Semantic search', 'Hybrid retrieval', 'Re-ranking'],
        color: 'text-emerald-600'
    },
    {
        icon: Settings,
        title: 'Fine-tuning Methods',
        items: ['LoRA', 'QLoRA', 'Adapter modules', 'Full fine-tuning'],
        color: 'text-amber-600'
    }
];