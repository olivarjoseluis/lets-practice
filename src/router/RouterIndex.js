import { Routes, Route/*, Outlet, Link*/ } from "react-router-dom";
import Home from "../pages/Home";
import VerbsPage from "../pages/VerbsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PracticePage from "../pages/VerbsPracticePage";
import VocabularyPage from '../pages/VocabularyPage';
import VocabularyPracticePage from '../pages/VocabularyPracticePage';
import UsefulExpressionsPage from '../pages/UsefulExpressionsPage';
import UsefulExpressionsPracticePage from '../pages/UsefulExpressionsPracticePage';



function IndexToutes({ info }) {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="verbos" element={<VerbsPage />} />
            {<Route path="verbos/practica/grupo/:id" element={<PracticePage />} />}

            <Route path="vocabularios" element={<VocabularyPage />} />
            {<Route path="vocabularios/practica/grupo/:id" element={<VocabularyPracticePage />} />}

            <Route path="expresiones-utiles" element={<UsefulExpressionsPage />} />
            {<Route path="expresiones-utiles/practica/grupo/:id" element={<UsefulExpressionsPracticePage />} />}

            {/* Página 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default IndexToutes;
