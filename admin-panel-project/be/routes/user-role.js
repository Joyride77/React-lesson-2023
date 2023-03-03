import express from "express";
import { getNewRole, setNewRole } from "../services/user-role-services.js";

const emp_router = express.Router();

emp_router.get("/user-role", async (request, response) => {
  const result = await getNewRole();
  response.status(200).send(result);
});

emp_router.post("/user-role", async (request, response) => {
  console.log("lol", request.body);
  const { userRoleName } = request.body;

  const result = await setNewRole(userRoleName);
  response.status(200).send(result);
});

export default emp_router;
