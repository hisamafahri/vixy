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
app.delete("/null", (c) => {
  return c.res.null(); // Returns 204 by default
});

// HTML response
app.get("/about", (c) => {
  return c.res.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Ivy!</title>
      </head>
      <body>
        <p>This is a response from Ivy!</p>
      </body>
    </html>
  `);
});

// Cookie examples
app.get("/set-cookie", (c) => {
  c.res.cookie("session", "abc123", {
    httpOnly: true,
    maxAge: 3600,
    path: "/",
  });
  return c.res.json({ message: "Cookie set!" });
});

app.get("/get-cookie", (c) => {
  const session = c.req.cookie("session");
  return c.res.json({
    session: session ?? "No session cookie found",
  });
});

export default app;
