import { Router } from "express";
import path from "path";
import fs from "fs";

import { ImagesInfos } from "../interfaces/image-infos.model";
import { ImageRoutes } from "../modules/image-routes.component";

const router = Router();

router.get("/", async (req, res): Promise<void> => {
  try {
    const { fileName, width, height } = req.query;

    const fullFolderPath: string = path.resolve(
      __dirname,
      "../../assets/images/full",
    );
    const thumbFolderPath: string = path.resolve(
      __dirname,
      "../../assets/images/thumb",
    );

    const filePathFull: string = path.resolve(
      fullFolderPath,
      `${fileName}.jpg`,
    );
    const filePathThumb: string = path.resolve(
      thumbFolderPath,
      `${fileName}x${width}x${height}.jpg`,
    );

    const isExistFullFile = fs.existsSync(filePathFull);
    const isExistThumbFile = fs.existsSync(filePathThumb);

    const imageInfosCreateNewInThumbFolder: ImagesInfos = {
      filePathFull,
      filePathThumb,
      width: `${width}`,
      height: `${height}`,
    };

    const isValidWidth = !isNaN(Number(width));
    const isValidHeight = !isNaN(Number(height));

    if (!isValidWidth) {
      res.send("Invalid width. Please enter only number");
      return;
    }

    if (!isValidHeight) {
      res.send("Invalid height. Please enter only number");
      return;
    }

    if (!fileName || !width || !height) {
      res.send(
        "Lack file name or width or height of image. Please enter full value for this three field",
      );
      return;
    }

    if (isExistThumbFile) {
      res.sendFile(filePathThumb);
      return;
    }

    if (isExistFullFile) {
      await ImageRoutes.createNewImageInThumbFolder(
        imageInfosCreateNewInThumbFolder,
      );
      res.sendFile(filePathThumb);
      return;
    }

    res.send(`No image with name ${fileName} found!`);
  } catch (err) {
    console.log(err);
  }
});

export default router;
