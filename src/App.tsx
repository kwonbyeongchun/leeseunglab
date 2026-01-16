import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  HomePage,
  ResearchPage,
  TeamPage,
  PublicationsPage,
  NewsPage,
  BigQuestionsPage,
  BigQuestionDetailPage,
  ContactPage,
} from '@/pages';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/big-questions" element={<BigQuestionsPage />} />
        <Route path="/big-questions/:id" element={<BigQuestionDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
