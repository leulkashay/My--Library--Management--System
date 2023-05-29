import express from "express";
import mongooes from "mongooes";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./route/auth.js"
import userRoute from "./route/user.js"
import bookRoute from "./route/book.js"
import transactionRoute from "./route/transaction.js"
import categoryRoute from "./route/categories.js"


/* App creating using express and configure port number */
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

/* Configure Middlewares */
app.use(express.json());
app.use(cors());

/* Configure API route */
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/books", bookRoute);
app.use("/api/transactions", transactionRoute);
app.use("/api/categories", categoryRoute);


/* Configure Mongodb connection */
mongoose.connect(
    process.MONGO_URL,
    {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
    },
    () => {
	console.log("MONGO database connected");
    }
);


/* say welcome first */
app.get("/", (req, res) => {
    res.status(200).send(" Welcome to digital Library");
});

/* This is PORT listening for the app */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
