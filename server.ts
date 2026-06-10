import next from "next";
import { createServer } from "http";

const dev = process.env.NODE_ENV !== "production";

async function bootstrap() {
  if (process.env.MSW === "true") {
    const { server } = await import("./src/mocks/server");

    server.listen({
      onUnhandledRequest: "bypass",
    });

    console.log("MSW started");
  }

  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();

  createServer((req, res) => {
    handle(req, res);
  }).listen(3000);
}

bootstrap();
