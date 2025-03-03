app.get("/data", async (req, res) => {
  const result = fetch("https://api.example.com/data");
  res.send(await result.json());
});

app.get("/data", async (req, res) => {
  const result = await fetch("https://api.example.com/data"); // ✅ Await fetch
  res.send(await result.json()); // ✅ Await JSON parsing
});
