import { Loader } from "lucide-react"

const IsLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-600">
      <Loader className="size-10 animate-spin" />
    </div>
  )
}

export default IsLoading