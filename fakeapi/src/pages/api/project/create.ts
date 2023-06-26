import { authOptions } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { withMethods } from '@/lib/api-middlewares/with-methods';
import { db } from '@/lib/db';
import { nanoid } from 'nanoid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      res => res?.user
    );

    if (!user) {
      return res.status(401).json({
        error: 'SignIn to perform this action',
        project: null,
      });
    }

    const project = await db.project.create({
      data: {
        key: nanoid(),
        name: req.body.name,
        authorId: user.id,
        schema: {
          key: 'data',
          value: 'Object',
          type: 'Object',
          children: {},
          counter: -1,
          copies: 1,
          showChild: true,
        },
      },
    });

    return res.status(202).json({ error: null, project });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, project: null });
    }

    return res
      .status(500)
      .json({ error: 'Internal Server Error', project: null });
  }
};

export default withMethods(['POST'], handler);
