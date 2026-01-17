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
  JoinUsPage,
  ClimateSnacksPage,
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
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/climate-snacks" element={<ClimateSnacksPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
