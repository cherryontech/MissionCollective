#!/usr/bin/env node
// Simple local runner for the Netlify scheduled function.
// It stubs global.fetch and sets BUILD_HOOK_URL so the handler can run without network.
import { handler } from './test-scheduled-function.mjs'

process.env.BUILD_HOOK_URL = process.env.BUILD_HOOK_URL || 'https://example.com/build-hook'

// Mock global.fetch to avoid real network calls during local testing.
global.fetch = async (url, opts) => {
  console.log('Mock fetch called with:', url, opts)
  return {
    ok: true,
    status: 200,
    text: async () => 'mocked response body',
  }
}

(async () => {
  try {
    const event = { body: JSON.stringify({ next_run: new Date().toISOString() }) }
    console.log('Invoking handler with event:', event)
    const result = await handler(event)
    console.log('Handler result:', result)
  } catch (err) {
    console.error('Runner error:', err)
    process.exitCode = 1
  }
})()
