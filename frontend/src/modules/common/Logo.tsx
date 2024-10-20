interface Theme {
  logoUrl?: string;
}

const Logo: React.FC<Theme> = ({logoUrl= "url"}) => {
  return (
    <div className="logo h-16 w-16">
       {/* Logo */}
        <img src={logoUrl} className="w-20"></img>
    </div>
  )
}

export default Logo