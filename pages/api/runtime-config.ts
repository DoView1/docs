import type { NextApiRequest, NextApiResponse } from "next";
import { getPublicRuntimeConfig } from "../../lib/runtimeConfig";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ReturnType<typeof getPublicRuntimeConfig>>
) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(getPublicRuntimeConfig());
}
