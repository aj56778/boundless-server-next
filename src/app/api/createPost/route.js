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
    const db = globalThis.DB; // 'DB' matches your binding name

    const sql = `
    INSERT INTO reviews (userId, images, title, description, rating, location, time, public)
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
