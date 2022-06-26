import Spin from "./spinner.gif"

const loading = () =>{
    return (
        <div className = "text-center mb-4">
            <img src={Spin} alt="loading" />
        </div>
    )
  }
export default loading; 
