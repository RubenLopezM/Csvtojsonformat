import csvtojson from 'csvtojson'

export const getjson= async (req,res)=>{
    try {
             csvtojson(
                 {checkType:true}
             )
                .fromFile(csvFilepath)
                .then((json)=>{
                    res.status(200).json(json);
        })
                
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const csvFilepath = "archivo.csv"

