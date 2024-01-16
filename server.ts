import express, { Express } from "express";
import authRouter from "./routes/auth.route";
import morgan from "morgan";
import dontenv from "dotenv";
import colors from "colors";
import { connectDatabase } from "./config/database";
import { errorHandler } from "./middleware/errorHandler";
import serviceRouter from "./routes/services";
import bookingsRouter from "./routes/bookings";
import profileRouter from "./routes/profile";
import cookieParser from "cookie-parser";

dontenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Benedict making bigger applications" });
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// mout routers
app.use("/api/auth", authRouter);
app.use("/api/services", serviceRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/profile", profileRouter);

// error middleware
app.use(errorHandler);

// connect to database

connectDatabase();

app.listen(PORT, () =>
  console.log(colors.blue.bold(`Server running on PORT ${PORT}`))
);
