export const globalStyles = {
  colors: {
    brand: {
      100: "#fff",
      200: "#ffe102",
      400: "#e3d041",
      500: "#9cdbf3",
    }
  },
  fonts: {
    heading: "Roboto Mono, monospace",
    body: "Roboto Mono, monospace",
  },
  styles: {
    global: () => ({
      body: {
        overflowX: "hidden",
        color: "brand.100"
      }
    }),
  },
};
