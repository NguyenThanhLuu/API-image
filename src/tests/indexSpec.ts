import supertest from "supertest";

import app from "../index";
import { ImagesInfos } from "../interfaces/image-infos.model";
import { ImageRoutes } from "../modules/image-routes.component";

const req = supertest(app);

describe("testing endpoint", (): void => {
  it("endpoint case 1 - http://localhost:3001", async (): Promise<void> => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });

  it("endpoint case 2 - http://localhost:3001/api/images?fileName=tayson&width=400&height=200", async (): Promise<void> => {
    const res = await req.get(
      "/api/images?fileName=tayson&width=400&height=200",
    );
    expect(res.status).toBe(200);
  });

  it("invalid endpoint", async (): Promise<void> => {
    const res = await req.get("/egg");
    expect(res.status).toBe(200);
  });
});

describe("Image Processing", (): void => {
  it("Test imagesInfos", async (): Promise<void> => {
    const imagesInfos: ImagesInfos = {
      filePathFull: "path/full-image.jpg",
      filePathThumb: "path/thumb-image.jpg",
      width: "100",
      height: "100",
    };
    expect(imagesInfos).toBeDefined();
  });
});

describe("Image processing width sharp", (): void => {
  it("Invalid width", async (): Promise<void> => {
    const err = await ImageRoutes.createNewImageInThumbFolder({
      filePathFull: "tayson",
      width: "hello",
      height: "500",
      filePathThumb: "tayson",
    });
    expect(err).not.toBeNull();
  });
});
