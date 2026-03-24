/**
 * Logger that writes to stderr only.
 * Critical for stdio MCP servers — stdout is reserved for JSON-RPC messages.
 */
export const log = {
  info(message: string, data?: unknown) {
    console.error(`[GSC-MCP] [INFO] ${message}`, data !== undefined ? data : '');
  },

  warn(message: string, data?: unknown) {
    console.error(`[GSC-MCP] [WARN] ${message}`, data !== undefined ? data : '');
  },

  error(message: string, error?: unknown) {
    console.error(
      `[GSC-MCP] [ERROR] ${message}`,
      error instanceof Error ? error.message : error ?? '',
    );
  },

  debug(message: string, data?: unknown) {
    if (process.env.GSC_DEBUG === 'true') {
      console.error(`[GSC-MCP] [DEBUG] ${message}`, data !== undefined ? data : '');
    }
  },
};
