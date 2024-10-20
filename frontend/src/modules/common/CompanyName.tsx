interface Name{
  companyName : string
}

const CompanyName: React.FC<Name> = ({companyName= "name"}) => {
  return (
    <p>{companyName}</p>
  )
}

export default CompanyName