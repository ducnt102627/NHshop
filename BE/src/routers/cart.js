import { Router } from "express";
import { addItemToCart, decreaseProductQuantity, getCartByUserId, increaseProductQuantity, removeCartById, removeCartByUserId, removeFromCart, updateProductQuantity } from "../components/cart";

const router = Router();
router.get("/cart/:userId", getCartByUserId);
router.post("/cart/addToCart", addItemToCart);
router.post("/cart/remove", removeFromCart);
router.post("/cart/update", updateProductQuantity);
router.post("/cart/increase", increaseProductQuantity);
router.post("/cart/decrease", decreaseProductQuantity);
router.delete("/cart/remove/:id", removeCartById)
// router.delete("/cart/remove/:userId", removeCartByUserId)
export default router;  