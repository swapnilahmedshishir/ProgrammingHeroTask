app.use((req, res, next) => {
  console.log("Request processing");
  next();
});
