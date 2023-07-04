import { NextApiHandler } from "next";
import db from "../../db/db";

// HTTP Endpoint: `/api/example`
const example: NextApiHandler = async (req, res) => {
  // Gets the `id` from the query field.
  const { id } = req.query;

  // Handles an API GET
  if (req.method === "GET") {
    // HTTP GET `/api/example?id=100`: 200 OK
    res.status(200).json({
      success: true,
      id,
      message: "hi there!"
    });
  } else {
    // Handles all other HTTP methods with a 404
    // HTTP POST `/api/example`: 404 ERROR
    res.status(404).end();
  }
};

export default example;

