import { useState,useMemo } from "react"



const BmiCalculator = () => {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)

  const bmi = useMemo(() =>{
    if(height === 0) return 0
    const heightInMeters = height / 100
    return weight / (heightInMeters * heightInMeters)
  },[weight,height])

  return (
    <div className="container">
      <h1 className="title">BMI CALCULATOR</h1>
      <label htmlFor="kg">Kilo:{weight}</label>
      <br />
      <input
       type="range"
        id="kg"
        name="Kilo"
        min="0"
        max="120"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}/>
         <br />
      <label htmlFor="size">Boy:{height}cm</label>
      <br />
      <input
       type="range"
        id="size"
        name="Boy"
        min="0"
        max="200"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}/>
           <br />
          <p className="bmi">BMI:{bmi.toFixed(1)}</p>
    </div>
  )
}
export default BmiCalculator