import { test, expect } from "@playwright/test";

test("shows mocked todo", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("todo-title")).toHaveText("Mock Todo");
});
