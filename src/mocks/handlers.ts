import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
    return HttpResponse.json({
      id: 1,
      title: "Mock Todo",
      completed: false,
    });
  }),

  http.post("https://api.example.com/users", async () => {
    return HttpResponse.json({
      success: true,
      id: 123,
    });
  }),
];
