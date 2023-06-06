const { Project_model } = require("../../models/Project.model");

const Get_project_controller = async (req, res) => {
  const query = { ...req.query };
  const match = ["limit", "page", "sort"];
  match.forEach((ele) => delete query[ele]);
  try {
    let project = Project_model.find();

    // Pegination
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;
    project = project.skip(skip).limit(limit);
    project = await project;
    const response = {
      status: "sucess",
      result: 10,
      data: {
        project,
      },
    };
    return res.status(201).json(response);
  } catch (error) {
    // Create error response
    const error_response = {
      status: "fail",
      message: "An error occurred",
    };
    console.log(error);
    return res.status(500).json(error_response);
  }
};

module.exports = {
  Get_project_controller,
};
