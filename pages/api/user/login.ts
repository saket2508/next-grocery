import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../lib/db";
import { jwtGenerator } from "../../../utils/jwtGenerator";
import * as cookie from "cookie";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    const target_user: any = await query(
      `
            SELECT *
            FROM users
            WHERE email = ?
            LIMIT 1
        `,
      email
    );
    if (!target_user || target_user.length === 0) {
      return res.status(401).json({ msg: "Invalid username or password" });
    }
    let valid_pass = await bcrypt.compare(password, target_user[0].password);
    if (!valid_pass) {
      return res.status(401).json({ msg: "Invalid username or password" });
    }
    const token = jwtGenerator(target_user[0].id);
    // save token in http-only cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        path: "/",
      })
    );
    res
      .status(201)
      .json({
        success: true,
        message: "User is signed in",
        name: target_user[0].name,
      });
  } catch (error) {
    console.error("Error signing in user: ", error);
    return res.status(501).json({ msg: "Server Error" });
  }
}
