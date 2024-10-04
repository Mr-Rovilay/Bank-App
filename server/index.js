import express from 'express';
import cors from "cors";
import { connectDB } from "./db/db.js";
import bodyParser from "body-parser";
import userRouter from './routers/userRouter.js';
import supportRouter from './routers/supportRouter.js';
import settingsRouter from './routers/settingsRouter.js';
import reviewloansRouter from './routers/reviewloansRouter.js';
import repaymentRouter from './routers/repaymentRouter.js';
import notificationRouter from './routers/notificationRouter.js';
import loanRouter from './routers/loanRouter.js';
import loanReportRouter from './routers/loanReportRouter.js';
import lenderProfileRouter from './routers/lenderProfileRouter.js';
import investmentRouter from './routers/investmentRouter.js';
import borrowerRepaymentRouter from './routers/borrowerLoanRouter.js';
import borrowerNotificationRouter from './routers/borrowerNotificationRouter.js';
import borrowerLoanRouter from './routers/borrowerLoanRouter.js';
import paymentRoutes from './routers/paymentRoutes.js';

const PORT = process.env.PORT || 5000;
// Initialize the Express application
const app = express();
app.use(bodyParser.json());

app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json()); 

// Routers
app.use('/api/users', userRouter);
app.use('/api/support', supportRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/review-loan', reviewloansRouter);
app.use('/api/repayments', repaymentRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/loans',  loanRouter);
app.use('/api/loan-report', loanReportRouter); 
app.use('/api/lender-profile', lenderProfileRouter);
app.use('/api/investment', investmentRouter);
app.use('/api/borrower-repayment', borrowerRepaymentRouter);
app.use('/api/borrower-notification', borrowerNotificationRouter);
app.use('/api/borrower-loan', borrowerLoanRouter);
app.use('/api', paymentRoutes);

  app.get("/", (req,res)=> {
    res.send("postgres api working")
})

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  }).catch(err => {
    console.error("Failed to connect to the database", err);
  });