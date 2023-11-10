"use client";
import Image from "next/image";
import "@radix-ui/themes/styles.css";
import {
  Box,
  Container,
  Flex,
  Section,
  Theme,
  Text,
  Grid,
  Button,
} from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(!open);

  return (
    <>
      <header className="relative">
        <Theme appearance="dark">
          <Container
            m="2"
            width="100%"
            position="fixed"
            className=" rounded-2xl z-20">
            <Flex justify="between" align="center" p="4">
              <Flex direction="column" align="center">
                <span className="text-blue-500">Rooted</span>
                <span className="text-blue-500">
                  Web Design and Development
                </span>
              </Flex>
              <Flex>
                <span className="text-blue-500">Contact us</span>
                <Button className="IconButton" onClick={handleNav}>
                  {open ? <HamburgerMenuIcon /> : <Cross1Icon />}{" "}
                </Button>
              </Flex>
            </Flex>
          </Container>

          <nav>
            <Container pt="9">
              <Flex align="center" justify="center">
                <Grid columns="2" align="center" justify="center">
                  <Text>Link one</Text>
                  <Text>Link two</Text>
                  <Text>Link three</Text>
                  <Text>Link four</Text>
                </Grid>
              </Flex>
            </Container>
          </nav>
        </Theme>

        <Theme
          appearance="light"
          className={
            open
              ? "rounded-t-3xl h-screen absolute top-0 w-screen"
              : "rounded-t-3xl h-screen"
          }>
          <Container mt="2" pt="9" pb="9">
            <Flex align="center" justify="center">
              Agency Site
            </Flex>
          </Container>
        </Theme>
      </header>
    </>
  );
}
