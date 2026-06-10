async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  return response.json();
}

export default async function HomePage() {
  const todo = await getTodo();

  return (
    <main>
      <h1>Todo</h1>
      <p data-testid="todo-title">{todo.title}</p>
    </main>
  );
}
