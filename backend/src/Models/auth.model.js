import userSchema from "../Schemas/auth.schema.js";
import mongoose from "mongoose";

const User = mongoose.model('users', userSchema);

export default User