import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Employee count in company N</h1>
      <h2>Total number of employees: {employees} </h2>
      <h2>Reward will be received: {increased}</h2>
    </div>
  );
};

export default AppInfo;
