export const config = {
  ollama: {
    baseUrl: process.env.OLLAMA_API_BASE_URL ?? "http://localhost:11434",
    model: process.env.OLLAMA_MODEL ?? "codellama",
  },
  server: {
    port: Number(process.env.PORT ?? 4001),
  },
  langflow: {
    baseUrl: process.env.LANGFLOW_API_BASE_URL ?? "http://127.0.0.1:7860/api/v1/run/3499d75a-7f91-4db2-95bb-43e308ae5c41?stream=true",
  },
};
