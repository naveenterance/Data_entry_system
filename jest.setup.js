const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (message) => {
    originalConsoleError(message);

    throw new Error(message);
  };

  console.warn = (message) => {
    originalConsoleWarn(message);

    throw new Error(message);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
