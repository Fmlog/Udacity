import path from "path";
import sharp from "sharp";
import { existsSync, promises as fs } from "fs";

function getFileName(fileName: string): Promise<String> {
  return new Promise((resolve, reject) => {
    try {
      const exts = [".png", ".jpg", ".webp"];
      let fullFilename = "";
      const matches = [];
      for (let e of exts) {
        matches.push(path.resolve("assets/full/" + fileName + e));
      }
      for (let m of matches) {
        if (existsSync(m)) {
          fullFilename = m;
          break;
        }
      }
      resolve(fullFilename);
    } catch (error) {
      reject(error);
    }
  });
}
async function resizeHelper(
  image: string,
  width: number,
  height: number,
  imgExport: string
) {
  sharp(image)
    .resize(Number(width), height)
    .toFile(imgExport, (error, info) => {
      console.log(`Something went wrong!\n\n ${error} ${info}`);
    });
}

async function resize(req: { query: any }, res: any, next: () => void) {
  const query = await req.query;
  const filename = query.filename;
  const image = (await getFileName(filename)) as string;
  const imgExport = `assets/thumb/${filename}.jpg`;
  const width = Number(query.width);
  const height = Number(query.height);

  if (!existsSync(imgExport)) {
    await resizeHelper(image, width, height, imgExport);
  }

  try {
    res.sendFile(path.resolve(imgExport));
  } catch (error) {
    res.status(404).send("Image does not exist");
  }

  next();
}

export default resize;
