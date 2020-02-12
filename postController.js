exports.allPost = (req, res) => {
  console.log(req.query);
  res.send("<h4>This is get and query</h4>");
};
exports.singlePost = (req, res) => {
  res.send("this is " + req.params.id);
};
exports.createPost = (req, res) => {
  res.send("<h4>This is post request</h4>");
};
