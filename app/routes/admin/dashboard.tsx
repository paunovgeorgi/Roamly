import { Header } from "components"

const Dashboard = () => {
  const user = {name: 'Georgi'};

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'GUest'}`}
        description="Track activity, trends and popular destinations in real time"  />
        Dashboard Page Contents
    </main> 
  )
}

export default Dashboard