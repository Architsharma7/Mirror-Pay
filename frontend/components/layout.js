import Dashboard from "../pages/dashboard";

export default function Layout({children}) {
    return (
      <div className="h-screen flex flex-row justify-start">
      <Dashboard/>
        <div className="">
          {children}
        </div>
      </div>
    )
  }