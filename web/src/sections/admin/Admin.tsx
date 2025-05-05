import { Upload } from '../../features/admin/Upload.tsx'
import { Download } from '../../features/admin/Download.tsx'

const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <Upload />
      <Download />
    </>
  )
}

export { Admin }