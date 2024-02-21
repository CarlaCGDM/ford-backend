import Exhibit from '../models/Exhibit'

export const createExhibit = async (req,res) => 
{
    // What do we get from the frontend?

    console.log("Request: ")
    console.log(req.body)


    const {name, modelURL, imgURL, description, author, license} = req.body

    const newExhibit = new Exhibit({name,modelURL,imgURL,description,author,license})

    const exhibitSaved = await newExhibit.save()

    await newExhibit.save()

    res.status(201).json(exhibitSaved) // nuevo recurso se ha creado
}

export const getExhibits = async (req,res) => 
{
    const exhibits = await Exhibit.find()
    res.status(200).json(exhibits)
}

export const getExhibitById = async (req,res) => 
{
        const exhibit = await Exhibit.findById(req.params.exhibitId)
        res.status(200).json(exhibit)
}

export const getExhibitByIds = async (req,res) => 
{
    // If we are being sent multiple Ids:
    // Split by Ids:
    const ids = req.params.exhibitIds.split("&")
    console.log(ids)
        
    // Obtain list of elements:
    const exhibits = await Exhibit.find({ '_id': { $in: ids } });
    res.status(200).json(exhibits)
}

export const updateExhibitById = async (req,res) => 
{
    const updatedExhibit = await Exhibit.findByIdAndUpdate(req.params.exhibitId,req.body,{new:true})
    res.status(200).json(updatedExhibit)

}

export const deleteExhibitById = async (req,res) => 
{
    const deletedExhibit = await Exhibit.findByIdAndDelete(req.params.exhibitId)
    res.status(204).json(deletedExhibit)
}