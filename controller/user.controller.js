export const userProfileController = (req, res) => {
  const { name, email } = req.body;

  res.status(200).json({
    ok: true,
    message: "user profile ok",
    data: {
      name: name || "anon",
      email: email || "no-email",
    },
  });
};
