import Express from "express";
const router = Express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

export default router;
