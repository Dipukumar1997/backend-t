import { toast } from "react-toastify";
import userModel from "../models/userModel.js";
// export default  getuserdata =  async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const user = await userModel.findById(userId);
//         if (!user ) {
//             return res.json({success :false , message:"user not found" })
//         }
//         res.json({
//             success:true ,
//             userData:{
//                 name :user.name,
//                 isAccountverified:user.isAccountverified
//             }
//         });
//     } catch (error) {
//         toast.error("in userController.js");
//     }
// } 

export const getuserdata = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "user not found" });
        }
        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountverified: user.isAccountverified
            }
        });
    } catch (error) {
        toast.error("in userController.js");
    }
};
