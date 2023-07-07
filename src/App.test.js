import { render } from "@testing-library/react";

import App from "./App";

test("sad", async () => {
  render(<App/>);

  const styles = document.querySelectorAll("style");
  expect(styles.length).toBe(1);
  expect(styles[0].getAttribute('data-styled')).toBe('active');
});
