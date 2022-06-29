import { Request, Response } from "express";
import technologyService from "../../services/SuperAdmin/TechnologyService";

class technologyController {
  async post(req: Request, res: Response) {
    try {
      await technologyService.post(req, res);
      return res.send({ status: "Data Inserted" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Server side error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const users = await technologyService.getAll();
      if (!users) {
        return res.send({ status: "Something error" });
      }
      res.status(200).json({
        result: users,
        message: "success",
      });
    } catch (error) {
      return res.send({ status: "Something error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await technologyService.delete(req, res);
      return res.send({ status: "Deleted" });
    } catch (error) {
      return res.send({ status: "Error" });
    }
  }
}

export default new technologyController();
