import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { z } from "zod";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {
            query: { apikey },
            method,
          } = req;

        const data = {}

        console.log(apikey)
        return res.status(202).json({ error: null, data: apikey })
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log('edsd')
            return res.status(400).json({ error: error.issues, data: null })
        }
        return res
        .status(500)
        .json({ error: 'Internal Server Error', data: null })
    }
}

export default withMethods(['GET'], handler)