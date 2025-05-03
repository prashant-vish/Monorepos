const express = require("express");

const app = express();

app.get((req: Request, res: Response) => {});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
