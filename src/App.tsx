import { Box } from "@mui/material";
import { ArticlePage } from "pages/article.page";
import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as RoutesEnum } from "static/enums/routes.enum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={RoutesEnum.Poland} />} />
      <Route path="/country/:name" element={<ArticlePage />} />
      <Route path="*" element={<Box>Oooopsss... something went wrong!</Box>} />
    </Routes>
  );
}

export default App;
