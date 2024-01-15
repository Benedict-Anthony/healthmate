import mongoose from "mongoose";
import colors from "colors";

export const connectDatabase = async () => {
  const connection = await mongoose.connect(process.env.MONGOOSE_URL as string);
  console.log(
    colors.cyan.bold(
      `database connected on host: ${connection.connection.host}`
    )
  );
};
