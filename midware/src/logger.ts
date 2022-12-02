function logger(req: { url: any }, res: any, next: () => void) {
  const path = req.url;
  console.log(path);
  next();
}

export default logger;
