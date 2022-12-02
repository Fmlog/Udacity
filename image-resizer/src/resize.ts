import path from "path";
import sharp from "sharp";
import { existsSync, promises as fs } from "fs";

async function resize(req: { query: any }, res: any, next: () => void) {
  const query = req.query;
  const image = `assets/full/${query.filename}`;
  const imgExport = `assets/thumb/${query.filename}`;

  if (!existsSync(imgExport)) {
    await fs.writeFile(
      imgExport,
      sharp(image)
        .resize(Number(query.width), Number(query.height))
        .toFile(imgExport, (error, info) => {
          console.log(`Something went wrong!\n\n ${error} ${info}`);
        })
    );
  }

  try {
    res.sendFile(path.resolve(imgExport));
  } catch (error) {
    res.status(404).send("Image does not exist");
  }

  next();
}

export default resize;
