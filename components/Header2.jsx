

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
            name: "Mizoram",
        },
        {
            name: "Haryana",
        },
        {
            name: "Hyderabad",
        },
        {
            name: "Maharashtra",
        },
        {
            name: "Bangalore",
        },
        {
            name: "Gujarat",
        },
        {
            name: "Assam",
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
