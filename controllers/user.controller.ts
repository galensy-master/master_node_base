import { Request, Response } from 'express';

const dummy = ((req: Request, res: Response) => {
      return res
        .json({ message: "dummy" });
});

export default {
  dummy
}