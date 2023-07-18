import express from "express";
import ImageRouter from "./routers/image.router";

const app = express();
const port = 3001;

app.use("/api/images", ImageRouter);

app.use("/", (req: express.Request, res: express.Response): void => {
  res.send(
    `You can access link to get image with width and height:
      <a href="/api/images?fileName=tayson&width=400&height=200">/api/images?filename=tayson&width=400&height=200</a>
    `,
  );
});

app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
