import React from "react";
import { Navbar, Footer } from "components/Layout";

import { Stack, Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack h="full">
      <Box flex="1 0 auto">
        <Navbar />
        <Box as="main">{children}</Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
