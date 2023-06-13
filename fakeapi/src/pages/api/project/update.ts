import { authOptions } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (res) => res?.user
    );

    if (!user) {
      return res.status(401).json({
        error: "SignIn to perform this action",
        project: null,
      });
    }

    const project = await db.project.update({
      where: { id: req.body.id },
      data: {
        schema: req.body.schema,
      },
    });

    return res.status(200).json({ error: null, project });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, project: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", project: null });
  }
};

export default withMethods(["PATCH"], handler);
