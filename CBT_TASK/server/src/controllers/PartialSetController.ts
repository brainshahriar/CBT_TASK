import { Request, Response } from "express";
import partialsetService from "../services/PartialSetService";

class partialsetController {
  async post(req: Request, res: Response) {

    try {
      await partialsetService.postSet(req, res);
      return res.send({ status: "Data Inserted" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Server side error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const sets = await partialsetService.getAllUser();
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

export default new partialsetController();
