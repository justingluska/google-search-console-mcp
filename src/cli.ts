#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';
import { log } from './utils/logger.js';

async function main() {
  const server = createServer();
  const transport = new StdioServerTransport();

  log.info('Starting Google Search Console MCP server...');

  await server.connect(transport);

  log.info('Server connected via stdio transport');
}

main().catch((error) => {
  log.error('Fatal error starting server', error);
  process.exit(1);
});
