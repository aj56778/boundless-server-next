export async function GET(request) {
  try {
    const { env } = getCloudflareContext(); // Extract Cloudflare env bindings
    const db = env.DB; // 'DB' matches your binding name

    const { searchParams } = new URL(request.url);
    const userIds = searchParams.getAll("ids");
    const placeholders = userIds.map(() => "?").join(", ");
    const sql = `
    SELECT * FROM Posts WHERE userId IN ${placeholders}
  `;

    const { results } = await db
      .prepare(sql)
      .bind(...userIds)
      .all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e);
  }
}
