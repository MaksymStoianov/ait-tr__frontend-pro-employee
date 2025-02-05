import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import CreateEmployee from "pages/CreateEmployee/CreateEmployee";
import Employee from "pages/Employee/Employee";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/create-employee" />} />
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
