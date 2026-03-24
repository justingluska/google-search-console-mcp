# Google Search Console MCP Server

[![npm version](https://img.shields.io/npm/v/google-search-console-mcp.svg)](https://www.npmjs.com/package/google-search-console-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

The definitive [Model Context Protocol](https://modelcontextprotocol.io/) server for Google Search Console. Connect your AI assistant to real SEO data — search analytics, URL inspection, sitemaps, indexing, and smart opportunity detection.

## Features

- **Search Analytics** — Query performance data with all dimensions (including hourly), regex filters, all search types (web, discover, news, image, video), up to 25K rows
- **Period Comparison** — Compare any two date ranges with automatic delta calculations
- **Opportunity Detection** — Find quick wins, declining pages, and emerging queries automatically
- **URL Inspection** — Check indexing status, mobile usability, rich results for single or batch URLs
- **Sitemap Management** — List, submit, and delete sitemaps
- **Indexing API** — Submit URL update/delete notifications via Google's Indexing API
- **Property Management** — List and manage all Search Console properties
- **Dual Auth** — OAuth 2.0 (interactive) or Service Account (headless) authentication
- **Rate Limiting** — Built-in quota management respecting all Google API limits
- **Best Practices** — Tool annotations, curated responses, Zod validation, proper error handling

## Quick Start

```bash
npx google-search-console-mcp
```

## Setup

### Prerequisites

1. A [Google Cloud Project](https://console.cloud.google.com/) with the Search Console API enabled
2. OAuth 2.0 credentials (Desktop app) or a Service Account
3. Node.js >= 18

### Option A: Service Account (Recommended for automation)

1. Create a Service Account in Google Cloud Console
2. Download the JSON credentials file
3. Add the service account email as a user in [Search Console](https://search.google.com/search-console/) (Settings > Users and permissions)
4. Set the environment variable:

```bash
export GSC_SERVICE_ACCOUNT_PATH=/path/to/service-account.json
```

### Option B: OAuth 2.0 (Interactive)

1. Create OAuth 2.0 Desktop App credentials in Google Cloud Console
2. Download the credentials JSON file
3. Set the environment variable:

```bash
export GSC_OAUTH_CREDENTIALS_PATH=/path/to/credentials.json
```

On first run, a browser window opens for authentication. Tokens are cached for subsequent use.

### Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "google-search-console-mcp"],
      "env": {
        "GSC_SERVICE_ACCOUNT_PATH": "/path/to/service-account.json"
      }
    }
  }
}
```

### Cursor Configuration

Add to your `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "google-search-console-mcp"],
      "env": {
        "GSC_SERVICE_ACCOUNT_PATH": "/path/to/service-account.json"
      }
    }
  }
}
```

## Tools

| Tool | Description |
|------|-------------|
| `search_analytics` | Query search performance data with full filtering and dimension support |
| `compare_periods` | Compare two date ranges with delta calculations |
| `find_opportunities` | Identify quick wins, declining pages, and emerging queries |
| `inspect_url` | Inspect a single URL's index status, mobile usability, and rich results |
| `batch_inspect_urls` | Inspect multiple URLs with built-in rate limiting |
| `list_sitemaps` | List all sitemaps with status and error details |
| `submit_sitemap` | Submit a new sitemap |
| `delete_sitemap` | Remove a sitemap |
| `list_properties` | List all accessible Search Console properties |
| `notify_url_update` | Notify Google of URL updates/deletions via Indexing API |
| `get_indexing_status` | Check Indexing API notification status for a URL |

## Example Prompts

```
"Show me my top 20 queries by clicks for the last 7 days"
"Compare this week's performance to last week"
"Find quick win opportunities — high impressions but low CTR"
"Check if https://example.com/new-page is indexed"
"Inspect these 10 URLs and tell me which ones have indexing issues"
"List all my sitemaps and their status"
"Submit my new sitemap at https://example.com/sitemap-blog.xml"
"Show me hourly traffic data for today"
"What are my top performing pages on Google Discover?"
"Find pages that are losing traffic compared to last month"
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GSC_SERVICE_ACCOUNT_PATH` | Path to service account JSON | One of these |
| `GSC_OAUTH_CREDENTIALS_PATH` | Path to OAuth credentials JSON | is required |
| `GSC_OAUTH_TOKEN_PATH` | Path to store OAuth tokens (default: `~/.gsc-mcp-token.json`) | No |
| `GSC_DATA_STATE` | Default data freshness: `final`, `all`, or `hourly_all` (default: `all`) | No |
| `GSC_DEFAULT_SITE_URL` | Default site URL to use when not specified | No |

## Development

```bash
git clone https://github.com/justingluska/google-search-console-mcp.git
cd google-search-console-mcp
npm install
npm run build
npm test
```

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

## License

[MIT](LICENSE)
