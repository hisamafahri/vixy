import Ivy from "../../src/index";

const app = new Ivy();

app.get("/", (c) => {
  return c.res.text("Hello World!");
});

app.get("/greet", (c) => {
  return c.res.json({
    message: "Hello",
  });
});

app.get("/users/:id", (c) => {
  const id = c.req.param("id");
  return c.res.json({ userId: id, name: `User ${id}` });
});

app.get("/posts/:postId/comments/:commentId", (c) => {
  const postId = c.req.param("postId");
  const commentId = c.req.param("commentId");
  return c.res.json({
    post: postId,
    comment: commentId,
  });
});

// DELETE route with null response (204 No Content)
app.delete("/users/:id", (c) => {
  const id = c.req.param("id");
  // Perform deletion logic here
  return c.res.null(); // Returns 204 by default
});

// BODY PARSERS

app.post("/users", async (c) => {
  const body = await c.req.json();
  return c.res.json(
    {
      message: "User created",
      user: body,
    },
    201,
  );
});

app.post("/echo", async (c) => {
  const text = await c.req.text();
  return c.res.text(`You sent: ${text}`);
});

app.post("/contact", async (c) => {
  const formData = await c.req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  return c.res.json({
    message: "Contact form received",
    data: { name, email, message },
  });
});

app.post("/upload", async (c) => {
  const buffer = await c.req.arrayBuffer();
  const blob = await c.req.blob();

  return c.res.json({
    message: "File uploaded",
    size: buffer.byteLength,
    blobSize: blob.size,
  });
});

// HTML response
app.get("/about", (c) => {
  return c.res.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>About</title>
      </head>
      <body>
        <h1>About Page</h1>
        <p>This is a sample Ivy application.</p>
      </body>
    </html>
  `);
});
