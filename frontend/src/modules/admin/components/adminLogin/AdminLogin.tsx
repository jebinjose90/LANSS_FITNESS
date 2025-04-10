import { useTheme } from "../../../common/hooks/useTheme";
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
          <div className="flex flex-wrap content-center justify-center bg-color1 w-[26rem] h-[42rem]">
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
          <div className="hidden xs:hidden sm:hidden md:hidden xl:flex flex-wrap content-center justify-center w-[32rem] h-[42rem]">
            <img className="w-full h-full bg-center bg-no-repeat bg-cover " src="https://i.imgur.com/f9szTOU.jpeg" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminLogin