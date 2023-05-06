import { authOptions } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        const user = await getServerSession(req, res, authOptions)
            .then(res => res?.user)

        if(!user) {
            return res.status(401).json({
                error: 'SignIn to perfotm this action',
                createdApiKey: null,
            })
        }


        const updatedProject = await db.project.update({
            where: { id: req.body.id },
            data: {
                schema: req.body.schema
            }
          });

        return res.status(200).json({ error: null, updatedProject })
    } catch (error) {
        if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.issues })
        }
    
        return res
        .status(500)
        .json({ error: 'Internal Server Error' })
    }
}

export default withMethods(['PATCH'], handler)