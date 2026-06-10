# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/home.spec.ts >> shows mocked todo
- Location: tests/home.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByTestId('todo-title')
Expected: "Mock Todo"
Received: "Mock Todo1"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByTestId('todo-title')
    14 × locator resolved to <p data-testid="todo-title">Mock Todo1</p>
       - unexpected value "Mock Todo1"

```

```yaml
- paragraph: Mock Todo1
```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test("shows mocked todo", async ({ page }) => {
  4 |   await page.goto("/");
  5 | 
> 6 |   await expect(page.getByTestId("todo-title")).toHaveText("Mock Todo");
    |                                                ^ Error: expect(locator).toHaveText(expected) failed
  7 | });
  8 | 
```