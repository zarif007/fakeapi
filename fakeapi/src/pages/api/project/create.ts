import { authOptions } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";

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
        
        const createdProject = await db.project.create({
            data: {
                key: nanoid(),
                name: req.body.name,
                authorId: user.id
            }
        })

        return res.status(202).json({ error: null, createdProject })
    } catch (error) {
        if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.issues, createdApiKey: null })
        }
    
        return res
        .status(500)
        .json({ error: 'Internal Server Error', createdApiKey: null })
    }
}

export default withMethods(['POST'], handler)