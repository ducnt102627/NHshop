import { StatusCodes } from "http-status-codes";
import Cart from "../model/cart"

export const getCartByUserId = async (req, res) => {
    const { userId } = req.params;
    // console.log(userId)
    try {
        const cart = await Cart.findOne({ userId }).populate("products.productId");

        // console.log(cart.products)
        const cartData = {
            products: cart.products.map((item) => ({
                productId: item.productId ? item.productId._id : null,
                image: item.productId ? item.productId.image : null,
                name: item.productId ? item.productId.name : null,
                price: item.productId ? item.productId.price : null,
                quantity: item.quantity
            }))
        };
        console.log("cartData:", cartData)
        return res.status(StatusCodes.OK).json(cartData)
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }
}
export const removeCartByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOneAndDelete({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" })
        }
        return res.status(StatusCodes.OK).json({ message: "Remmove cart to success", cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" });
    }
}
export const addItemToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        //kiểm tra giỏ hàng có tồn tại chưa? dựa theo userId
        let cart = await Cart.findOne({ userId });
        //nếu giỏ hàng không tồn tại thì ta tạo mới
        if (!cart) {
            cart = new Cart({ userId, products: [] })
        }
        const existProductIndex = cart.products.findIndex(
            (item) => item.productId.toString() === productId
        );
        //kiểm tra xem sản phẩm có tồn tại trong giỏ hàng không? 
        console.log(quantity)
        if (existProductIndex !== -1) {
            //nếu sản phẩm tồn tại trong giỏ hàng thì ta cập nhật số lượng
            console.log(cart.products[existProductIndex])
            cart.products[existProductIndex].quantity += +quantity;
        } else {
            //nếu sản  phẩm không có trong giỏ hàng thì ta tạo mới
            cart.products.push({ productId, quantity })
        }
        // lưu vào giỏ hàng
        await cart.save();
        return res.status(StatusCodes.OK).json({ message: "Add to success", cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" })
    }
}
export const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart not found" })
        }
        cart.products = cart.products.filter(
            (product) => product.productId && product.productId.toString() !== productId
        );
        await cart.save();
        return res.status(StatusCodes.OK).json({ cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" });
    }
}
export const removeCartById = async (req, res) => {
    try {
        let cart = await Cart.findByIdAndDelete(req.params.id);
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart not found" })
        }
        res.status(StatusCodes.OK).json({ message: "Remove cart to successfully", cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" })
    }
}

export const updateProductQuantity = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId: userId });
        console.log(cart);
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart not found" })
        }
        const product = cart.products.find((item) => item.productId.toString() === productId);
        console.log(product)
        if (!product) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" });
        }
        product.quantity = quantity;
        await cart.save();
        return res.status(StatusCodes.OK).json({ cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" });
    }
}
export const increaseProductQuantity = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart not found" });
        }
        const product = cart.products.find((item) => item.productId.toString() === productId);
        if (!product) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found in cart" })
        }
        product.quantity++;
        await cart.save();
        res.status(StatusCodes.OK).json({ cart })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}
export const decreaseProductQuantity = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart not found" })
        }
        const product = cart.products.find((item) => item.productId.toString() === productId);
        if (!product) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found in cart" });
        }
        product.quantity--;
        await cart.save();
        res.status(StatusCodes.OK).json({ cart });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}
