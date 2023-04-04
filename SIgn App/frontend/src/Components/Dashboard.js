import { Navigate } from "react-router-dom";
const Dashboard = () => {
    const token = localStorage.getItem('token')

    if(!token){
        return<Navigate to="/"/>
    }

    return (
        <div className = "container">
        <h2>Halaman Dashboard!</h2>
        </div>
    )
}

export default Dashboard;