import file from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const files = await file.create(fileObj);
    console.log(files);
    // res.status(201).json({path:"http://localhost:3000/"+"file/"+files._id});
    res.status(201).json({path:"https://sharing-app-r5f5.onrender.com/"+"file/"+files._id});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to upload file" });
  }
};


export const downloadImage = async (req, res) => {


    try{
        const files=   await file.findById(req.params.id);
        files.downloadContent++;
        await files.save();
        res.download(files.path,files.name);
    }catch(error)
    {
    console.log(error);
    return res.status(500).json({ message: "Failed to download file" });
    }
}
