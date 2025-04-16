

const Header2 = () => {
    const List = [
        {
            name: "Bihar",
        },
        {
            name: "Uttar Pradesh",
        },
        {
            name: "New Delhi",
        },
        {
            name: "Ranchi",
        },
        {
            name: "Rajsthan",
        },
        {
            name: "Chandigarh",
        },
        {
            name: "Haryana",
        },
        {
            name: "Heyderabad",
        },
        {
            name: "Mumbai",
        },
        {
            name: "Bangalore",
        },
        {
            name: "Gujarat",
        },
        {
            name: "Pune",
        },
    ]
  return (
    <div>
      <div className="flex px-12 py-3 bg-gray-100 justify-between">
        {
            List.map((e) => {
                return(
                    <span key={e.name} > {e.name}</span>
                )
            })
        }
      </div>
    </div>
  )
}

export default Header2
