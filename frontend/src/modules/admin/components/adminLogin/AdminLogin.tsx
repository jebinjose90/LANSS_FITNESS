import { useTheme } from "../../../../core/usecases/useTheme";
import InputField from "../../../common/InputField";

const AdminLogin = () => {
  const theme = useTheme()

  function handleInputChange() {

  }

  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <!-- component --> */}
      {/* <!-- Container --> */}
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-color2 py-10">

        {/* <!-- Login component --> */}
        <div className="flex shadow-md">
          {/* <!-- Login form --> */}
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-color1 w-[26rem] h-[42rem]">
            <div className="w-auto space-y-9">
              {/* <!-- Heading --> */}
              <h1 className="text-3xl font-oswald text-color3">ADMIN</h1>

              {/* <!-- Form --> */}
              <form className="mt-4 space-y-6">
                <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder="ENTER EMAIL" name="email" inputValue="" onChange={handleInputChange} />
                <InputField svgName="login-password-icon" svgWidth="28" svgHeight="24" placeholder="ENTER PASSWORD" name="password" type="password" inputValue="" onChange={handleInputChange} />

                <div className="flex items-center justify-start">
                  <button type="submit" className="text-color3 border-2 border-color3 bg-transparent font-sans py-2 h-10 w-full px-4 hover:opacity-45 transition duration-300 mt-5">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- Login banner --> */}
          <div className="hidden xs:hidden sm:hidden md:hidden xl:flex flex-wrap content-center justify-center rounded-r-md w-[32rem] h-[42rem]">
            <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://media-hosting.imagekit.io/60179717b1b44965/WhatsApp%20Image%202025-03-06%20at%2012.47.42.jpeg?Expires=1838290971&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mq0sGB44PmLgmTlBTJbj6zH3G~xQMCerJ5VxNodhLj6SPfEc2A1FRXeUKFVQkeDnA-VjuptX58o2ov5TaO3UCFxUmJdSOhnJUbQVZvs6LrjH405ufXo2MTYmGD2q2WPbnIpK~EZehi1dX3tcyrczhagl8OwSkNJSMoTkVl1XvVl4cKiZ2fokssMQQHoiA6nIqzKaCuh8siuUExqNe-SiqFhSyyFmUTKk8Nu0woM68fzOZoZJH-t-DO5GhIC~nfiW~FykjAl~wjj3M9DwFctu-7j5XAybEkA7yN-YYkmXRc6UNMxhYI9urbKTNeBMmp8ZydNUFwctVhUXsoUmmv~sPA__" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminLogin