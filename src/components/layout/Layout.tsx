import Sidebar from "../sidebar/Sidebar";

function Layout({ children }: any) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
