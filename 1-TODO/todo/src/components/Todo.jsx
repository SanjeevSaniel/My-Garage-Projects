import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  HStack,
  // Link,
  Button,
  Container,
  Grid,
  GridItem,
  // Box,
  // Image,
  Show,
} from "@chakra-ui/react";

import { useState } from "react";

const Todo = () => {
  // const [otp, setOtp] = useState("");

  // Log in OTP to the console
  // const handleChange = () => {
  //   console.log("OTP", otp);
  //   setOtp("");
  // };

  const todos = [
    {
      id: 1,
      title: "Frontend",
      memos: [
        {
          id: 1,
          description: "HTML",
        },
        {
          id: 2,
          description: "CSS",
        },
        {
          id: 3,
          description: "Javascript",
        },
      ],
    },
    {
      id: 2,
      title: "Backend",
      memos: [
        {
          id: 1,
          description: "Node",
        },
        {
          id: 2,
          description: "MongoDB",
        },
      ],
    },
  ];
  const [todoContent, setTodoContent] = useState([]);

  // const showDetails = (todo) => {
  //   const requiredTodo = todos.filter((t) => t.id === todo.id);
  //   setTodoContent(requiredTodo);
  // };

  return (
    <Container
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // backgroundColor="blackAlpha.700"
      // color="white"
    >
      <Grid
        templateAreas={{
          base: `"header"`,
        }}
        gridTemplateRows={".2fr 1fr"}
        gridTemplateColumns={{
          base: "1fr",
        }}
      >
        <GridItem>
          <Card
            borderRadius="none"
            color="white"
            backgroundColor="#252429"
            padding={1}
          >
            <CardHeader>
              <Heading>TODO</Heading>
            </CardHeader>
          </Card>
        </GridItem>

        <Grid
          templateAreas={{
            base: `"title"`,
            lg: `"title description"`,
          }}
          gridTemplateRows={"1fr"}
          gridTemplateColumns={{
            base: "25rem",
            lg: "20rem 40rem",
          }}
        >
          <GridItem area={"title"}>
            <Card
              borderRadius="none"
              color="white"
              backgroundColor="#252429"
              padding={6}
              width="20rem"
              height="35rem"
            >
              <CardBody display="flex">
                <Stack width="100%" spacing={5}>
                  {todos.map((todo) => {
                    return (
                      <Button
                        color="white"
                        key={todo.id}
                        variant="link"
                        onClick={() => setTodoContent(todo.memos)}
                      >
                        {todo.title}
                      </Button>
                    );
                  })}
                </Stack>
              </CardBody>
            </Card>
          </GridItem>

          {/* <Show above="lg"> */}
          <GridItem area={"description"}>
            <Card
              overflow="hidden"
              borderRadius="none"
              color="white"
              backgroundColor="#0A1118"
              // backgroundImage={Image1}
              padding={6}
              width="40rem"
              height="35rem"
            >
              {todoContent.length === 0 && (
                <Text margin="auto">Select a Todo</Text>
              )}
              {todoContent.map((t) => {
                return <Text key={t.id}>{t.description}</Text>;
              })}
            </Card>
          </GridItem>
          {/* </Show> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Todo;
