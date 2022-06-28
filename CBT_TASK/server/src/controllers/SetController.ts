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
      const sets = await setService.getAll();
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
}

export default new setController();
