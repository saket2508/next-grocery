import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../lib/db";
import authenticate from "../../../middleware/authenticate";

interface CustomRequest extends NextApiRequest {
  user?: any;
}

async function handler(req: CustomRequest, res: NextApiResponse) {
  try {
    const user_id = req.user.id;
    const product_id = req.body.id;
    const order_exists = await query(
      `
            SELECT *
            FROM cart
            WHERE user_id = ?
            AND product_id = ?
        `,
      [user_id, product_id]
    );
    if (!order_exists || order_exists!.length === 0) {
      return res.status(401).json({ msg: "Cannot find that order" });
    }
    // Update order in the DB
    let qtyBefore = order_exists[0].qty;
    if (qtyBefore === 1) {
      // remove order from DB
      await query(
        `
                DELETE FROM cart
                WHERE user_id = ?
                AND product_id = ?
            `,
        [user_id, product_id]
      );
      return res.status(200).json({ msg: "Deleted order" });
    }
    await query(
      `
            UPDATE cart
            SET qty = ?
            WHERE user_id = ?
            AND product_id = ?  
        `,
      [qtyBefore - 1, user_id, product_id]
    );
    return res.status(200).json({
      msg: "Updated Order",
      product: { product_id, qty: qtyBefore - 1 },
    });
  } catch (error) {
    console.error(error);
    return res.status(501).json({ msg: "Server Error" });
  }
}

export default authenticate(handler);
