import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request) {
  try {
    const {
      userId,
      images,
      title,
      description,
      rating,
      location,
      time,
      isPublic,
    } = await request.json();

    console.log({ userId });
    const { env } = getCloudflareContext(); // Extract Cloudflare env bindings
    const db = env.DB; // 'DB' matches your binding name

    const sql = `
    INSERT INTO Posts (userId, images, title, description, rating, location, time, public)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const { results } = await db
      .prepare(sql)
      .bind(
        userId,
        images,
        title,
        description,
        rating,
        location,
        time,
        isPublic ? 1 : 0
      )
      .run();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e);
  }
}
