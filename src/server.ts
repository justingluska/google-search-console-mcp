import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { version } from './version.js';

export function createServer(): McpServer {
  const server = new McpServer({
    name: 'google-search-console',
    version,
  });

  return server;
}
