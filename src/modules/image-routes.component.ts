import sharp from "sharp";

import { ImagesInfos } from "../interfaces/image-infos.model";

export class ImageRoutes {
  static createNewImageInThumbFolder = async (
    params: ImagesInfos,
  ): Promise<void> => {
    try {
      await sharp(params.filePathFull)
        .resize(+params.width, +params.height)
        .toFormat("jpeg")
        .toFile(params.filePathThumb);
    } catch (err) {
      console.log(err);
    }
  };
}
