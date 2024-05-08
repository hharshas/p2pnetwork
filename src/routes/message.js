export async function message(req, res) {
    console.log(`${req.body.from}: ${req.body.message}`);
    res.json({ message: "success" });
  }
  