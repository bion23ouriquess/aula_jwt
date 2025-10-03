import express from "express";
import authRouter from "./routes/authRoutes.ts";
import { auth } from "./middleware/auth.ts";
import userRouter from "./routes/userRoutes.ts";
import pedidosRouter from "./routes/pedidosRoutes.ts";
import produtosRouter from "./routes/produtoRoutes.ts";
import publicPedidosRouter from "./routes/publicPedidosRoutes.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("API RODANDO");
});

app.use(authRouter);
app.use(publicPedidosRouter);

app.use(auth);
// privados

app.use(userRouter);

app.use(pedidosRouter);

app.use(produtosRouter);

app.listen(PORT, () => {
  console.log(`Server port ${PORT}`);
});
