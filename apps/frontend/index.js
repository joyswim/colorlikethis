// import cors from "cors";
// import express from "express";

// const app = express();
// const port = 3000;

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!"); // 응답할 때 전달
//   // res.json({ color: "blue" });
// });

// app.get("/sound/:name", (req, res) => {
//   const { name } = req.params;
//   // console.log(`sound: ${name}`);
//   if (name === "dog") {
//     res.json({ sound: "멍멍" });
//   } else if (name === "cat") {
//     res.json({ sound: "야옹" });
//   } else {
//     res.json({ sound: "알수없음" });
//   }
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
