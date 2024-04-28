// console.log("Hello world")

import express from "express";
import * as path from "node:path";
import pg from "pg";

const postgresql = new pg.Pool({
  user: "postgres",
  database: "norway_data",
});

const app = express();
app.get("/api/kommuner", (req, res) => {
  res.sendFile(path.resolve("../public/kommuner.json"));
});

// app.get("/api/kommuner.new", async (req, res) => {
//   const result = await postgresql.query("select kommunenummer, kommunenavn, st_simplify(omrade,100)::json as geometry from kommuner");
//   res.json({
//     type: "FeatureCollection",
//     features: result.rows.map(({kommunenummer, kommunenavn, geometry}) => ({
//       type: "Feature",
//       geometry,
//       properties: {kommunenummer, kommunenavn},
//     }))
//   });
// });

app.listen(3000);
