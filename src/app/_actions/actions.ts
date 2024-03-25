"use server";

export async function predict(body: { image: string }): Promise<number> {
  try {
    const res = await fetch(`${process.env.BACK_URL}/image/predict`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
