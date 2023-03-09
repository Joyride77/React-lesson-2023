import express from "express";
// import {
//   getEmployees,
//   hireEmployee,
//   getMaxNo,
//   fireEmployee,
//   updateEmployee,
// } from "../services/employees-services.js";
import { getPopularCategory } from "../services/category-services.js";
import {
  getChildrenMenus,
  getParentMenus,
} from "../services/menus-services.js";

const apiRouter = express.Router();

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategory();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );
  response.status(200).send(parentMenus);
});

// apiRouter.get("/employees", async (request, response) => {
//   const result = await getEmployees();
//   response.status(200).send(result);
// });

// apiRouter.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   response.status(200).send(result);
// });

// apiRouter.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.empNo);
//   response.status(200).send(result);
// });

// apiRouter.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send({});
// });

export default apiRouter;
