"use server";

export async function getUsers() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (e: any) {
    return {
      message: e.message,
    };
  }
}
