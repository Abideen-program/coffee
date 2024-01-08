import { fetchStores } from "@/lib/coffee-store";
import { NextApiRequest, NextApiResponse } from "next";

const getStores = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { latlong, limit } = req.query;
    const response = await fetchStores(latlong, limit);
    res.status(200).json(response);
  } catch (err) {
    console.log("There is something wrong", err);
    res.status(500).json({ message: "An error occured", err });
  }
};

export default getStores;
 