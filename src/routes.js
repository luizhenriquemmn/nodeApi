import { Router } from "express";

const routes = new Router();

routes.get("/a", (req, res) => {
  return res.json({ ok: true });
});

export default routes;
