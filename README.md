# Smart Research Assistant - Zypher AI Agent

A production-ready AI research assistant built with Zypher Agent Framework that can search, analyze, and summarize information from the web.

## Features

- Web Search Integration: Searches multiple sources for relevant information
- Content Analysis: Analyzes and summarizes articles and web content
- Interactive CLI: Chat-based interface for natural conversations
- Research History: Maintains context across multiple queries
- Source Citation: Provides proper attribution for all information

## Prerequisites

- Deno v1.40 or higher
- OpenAI API key (or other LLM provider key)
- Basic knowledge of TypeScript/JavaScript

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/zypher-research-assistant.git
cd zypher-research-assistant
```

2. Create a `.env` file (or set env vars). See `.env.example`.

3. Run the agent

```bash
deno task start
```

4. Run tests

```bash
deno task test
```

## Project Structure

```
zypher-research-assistant/
├── src/
│   ├── main.ts
│   ├── agent/
│   │   ├── ResearchAgent.ts
│   │   ├── tools/
│   │   │   ├── WebSearch.ts
│   │   │   ├── Summarize.ts
│   │   │   └── Citation.ts
│   │   └── memory/
│   │       └── History.ts
│   ├── llm/
│   │   └── provider.ts
│   └── utils/
│       ├── logger.ts
│       └── config.ts
├── tests/
│   └── agent.test.ts
├── deno.json
├── .env.example
└── README.md
```

This repository contains a minimal, production-oriented scaffold for a Zypher-based research assistant built with Deno.
