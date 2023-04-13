import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, ScaleFade } from "@chakra-ui/react";

import { Loader } from "./components/Loader";

const Home = React.lazy(() => import("./pages/home/Home"));
const Questions = React.lazy(() => import("./pages/questions/Questions"));
const Start = React.lazy(() => import("./pages/topics/Topic"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export const App = () => {
  return (
    <Container maxW="6xl" centerContent>
      <ScaleFade initialScale={0.9} in={true}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/topics" element={<Start />} />
              <Route path="/:languageId/:topicId" element={<Questions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ScaleFade>
    </Container>
  );
};
