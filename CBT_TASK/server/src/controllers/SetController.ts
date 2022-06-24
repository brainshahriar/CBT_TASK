import { Request, Response } from "express";
import setService from "../services/SetServices";

class setController {
  async post(req: Request, res: Response) {

    try {
      await setService.postSet(req, res);
      return res.send({ status: "Data Inserted" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Server side error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const sets = await setService.getAllUser();
      if (!sets) {
        return res.send({ status: "Something error" });
      }
      res.status(200).json({
        result: sets,
        message: "success",
      });
    } catch (error) {
      return res.send({ status: "Something error" });
    }
  }

  // async getByid(req: Request, res: Response) {
  //   try {
  //     const test = await userService.getById(req, res);
  //     if (test) {
  //       return res.send({ result: test });
  //     } else {
  //       return res.send({ result: "Not found" });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return res.send({ status: "Something error" });
  //   }
  // }

  // async update(req: Request, res: Response) {
  //   try {
  //     await userService.updateUser(req, res);
  //     return res.send({ status: "Updated" });
  //   } catch (error) {
  //     console.log(error);
  //     return res.send({ status: "Error" });
  //   }
  // }

  // async delete(req: Request, res: Response) {
  //   try {
  //     await userService.delete(req, res);
  //     return res.send({ status: "Deleted" });
  //   } catch (error) {
  //     return res.send({ status: "Error" });
  //   }
  // }
}

export default new setController();
