import app from './config/app'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} 🚀`)
})
