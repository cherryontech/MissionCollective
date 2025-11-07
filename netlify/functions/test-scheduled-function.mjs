// Netlify scheduled functions expect a handler named `handler`.
// The event passed to Netlify Functions provides a string `event.body` (not a Fetch Request),
// so parse JSON from `event.body` if present.
export const handler = async (event) => {
    let next_run = null
    try {
        const body = event && event.body ? JSON.parse(event.body) : {}
        next_run = body.next_run
    } catch (err) {
        // ignore parse errors
    }

    console.log("Received scheduled event. Next invocation at:", next_run)

    const hook = process.env.BUILD_HOOK_URL
    if (!hook) {
        console.error('No BUILD_HOOK_URL configured; aborting deploy trigger')
        return {
            statusCode: 500,
            body: JSON.stringify({ ok: false, error: 'missing BUILD_HOOK_URL' }),
        }
    }

    try {
        // Netlify functions run on Node 18+ where global fetch is available.
        const resp = await fetch(hook, { method: 'POST' })
        const text = await resp.text()
        console.log('Build hook response status:', resp.status)
        console.log('Build hook response body:', text)
        return {
            statusCode: resp.status,
            body: JSON.stringify({ ok: resp.ok, status: resp.status, body: text }),
        }
    } catch (err) {
        console.error('Error calling build hook:', err)
        return {
            statusCode: 500,
            body: JSON.stringify({ ok: false, error: String(err) }),
        }
    }
}

export const config = {
    // Set to midnight PST or (08:00 UTC) every three days.
    schedule: "0 8 */3 * *",
}