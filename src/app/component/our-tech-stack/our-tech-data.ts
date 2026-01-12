type TechStackCategory = {
    id?: number;
    category?: string;
    items?: string[];
};

export const ourTechDetails: TechStackCategory[] = [
    {
        id: 1,
        category: "AI & Data",
        items: [
            "Azure OpenAI / OpenAI for LLMs; Retrieval-Augmented Generation (RAG)",
            "Vector search with Azure AI Search (or Qdrant when needed)",
            "Speech: Whisper (STT) and TTS for narration",
            "Python or .NET orchestration for inference pipelines",
            "Evaluation & guardrails: prompt versioning, basic safety filters, citation checks"
        ]
    },
    {
        id: 2,
        category: "Web & APIs",
        items: [
            "Angular (v17–18), TypeScript, responsive UI and accessibility",
            ".NET 8 minimal APIs / ASP.NET Core; REST (and GraphQL when required)",
            "SQL Server 2022 as the primary database; Redis for caching",
            "Authentication & SSO: OAuth 2.1 / OIDC (Microsoft Entra ID/Google)",
            "Integration patterns: webhooks, background jobs, file processing"
        ]
    },
    {
        id: 3,
        category: "Cloud, DevOps & Quality",
        items: [
            "Microsoft Azure as primary cloud (App Service, Functions, Storage, Azure SQL, Key Vault)",
            "Container-ready with Docker; AKS only when scale requires",
            "CI/CD with GitHub Actions or Azure DevOps",
            "Monitoring & logs: Application Insights (with dashboards and alerts)",
            "Testing: xUnit/NUnit (backend), Playwright/Cypress (UI)"
        ]
    },
    {
        id: 4,
        category: "Security & Compliance",
        items: [
            "Role-based access, secrets in Key Vault, least-privilege by default",
            "GDPR-ready processing; DPA on request",
            "OWASP ASVS controls; encryption in transit (TLS) and at rest",
            "Code reviews, dependency scanning, audit logs for changes"
        ]
    }
]