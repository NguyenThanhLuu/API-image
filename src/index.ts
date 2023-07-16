import express from "express";
import ImageRouter from "./routers/image.router";

const app = express();
const port = 3000;

app.use("/api/images", ImageRouter);

app.use("/", (req, res): void => {
  res.send(
    `You can access link to get image with width and height:
      <a href="/api/images?fileName=tayson&width=400&height=200">/api/images?filename=tayson&width=400&height=200</a>
    `,
  );
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
