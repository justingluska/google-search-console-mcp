# Changelog

## 0.1.0 (2026-03-24)

Initial release.

### Features

- **Search Analytics** — Full query support with all dimensions (query, page, country, device, searchAppearance, date), all search types (web, discover, googleNews, news, image, video), regex filters, data freshness control, up to 25K rows
- **Period Comparison** — Compare any two date ranges with automatic delta calculations for clicks, impressions, CTR, and position
- **Opportunity Detection** — Automatic identification of quick wins, declining content, and emerging queries
- **URL Inspection** — Single and batch URL inspection with index status, mobile usability, rich results, and AMP status
- **Sitemap Management** — List, submit, and delete sitemaps with content detail reporting
- **Property Management** — List all accessible Search Console properties with type and permission info
- **Indexing API** — URL update/deletion notifications and status checking via Google Indexing API
- **Dual Authentication** — Support for both OAuth 2.0 (interactive) and Service Account (headless)
- **Rate Limiting** — Built-in token bucket rate limiting respecting all Google API quotas
- **Tool Annotations** — Proper MCP tool annotations (readOnlyHint, destructiveHint, openWorldHint)
- **Curated Responses** — Context-window-friendly formatted output with summaries and tables
- **Actionable Errors** — Error messages include troubleshooting guidance for the AI to self-correct
