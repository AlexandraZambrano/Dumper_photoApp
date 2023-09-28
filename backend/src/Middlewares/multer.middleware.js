import multer from 'multer'
import B2 from 'backblaze-b2'

export const uploadMulter = multer({ storage: multer.memoryStorage() }).any()

export const uploadB2 = async (req, res, next) => {

    const b2 = new B2({
        applicationKeyId: process.env.KEY_ID,
        applicationKey: process.env.APP_KEY
    })

    const authResponse = await b2.authorize()
    const { downloadUrl } = authResponse.data

    const response = await b2.getUploadUrl({ bucketId: process.env.BUCKET_ID })
    
    console.log(response.data)

    const { authorizationToken, uploadUrl } = response.data
    

    const params = {
        uploadUrl,
        uploadAuthToken: authorizationToken,
        fileName:`post/${req.files[0].originalname}`,
        data: req.files[0].buffer,
    }

    const fileInfo = await b2.uploadFile(params)

    console.log(fileInfo.data)

    const url = `${downloadUrl}/file/${process.env.BUCKET_NAME}/${fileInfo.data.fileName}`

    console.log(process.env.BUCKET_NAME)

    res.locals.url = url

    next()
}