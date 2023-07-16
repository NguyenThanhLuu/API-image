import supertest from "supertest";

import app from "../index";
import { ImagesInfos } from "../interfaces/image-infos.model";

const req = supertest(app);

describe("Image Processing", () => {
  it("Test imagesInfos:", async (): Promise<void> => {
    const imagesInfos: ImagesInfos = {
      filePathFull: "path/full-image.jpg",
      filePathThumb: "path/thumb-image.jpg",
      width: "100",
      height: "100",
    };
    expect(imagesInfos).toBeDefined();
  });
});

describe("testing endpoint", () => {
  it("endpoint case 1 (/):", async (): Promise<void> => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });
});
