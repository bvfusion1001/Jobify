import { useState } from "react"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { useAppContext } from "../context/appContext"
import AreaChart from "./AreaChart"
import BarChartComponent from "./BarChart"

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications: data} = useAppContext()
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>{barChart? 'Area Chart' : 'Bar Chart'}</button>
      {barChart ?
        <BarChartComponent data={data}/>:
        <AreaChart data={data}/>
      }
    </Wrapper>
  )
}
export default ChartsContainer