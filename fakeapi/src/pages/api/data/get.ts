import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { schemaToDataDecoder } from "@/lib/SchemaToDataDecoder";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { ApiKey, Version },
      method,
    } = req;

    // Validate Api key

    const data = await db.project.findFirst({
      where: {
        key: typeof ApiKey === "string" ? ApiKey : "",
      },
    });

    if (!data) 
      return res.status(500).json({ error: "Invalid Api key", data: null });

    // Find specific version

    const decodedData = await schemaToDataDecoder(data?.schema);
    return res.status(202).json(decodedData.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, data: null });
    }

    return res.status(500).json({ error: "Internal Server Error", data: null });
  }
};

export default withMethods(["GET"], handler);
