import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  HStack,
  Link,
  Button,
  Container,
  Grid,
  GridItem,
  // Box,
  Image,
  Show,
} from "@chakra-ui/react";

import { useState } from "react";

// interface Todos {
//   id: number;
//   title: string;
//   memos?: [
//     {
//       id: number;
//       description: string;
//     }
//   ];
// }

interface Todo {
  id: number,
  title: string,
  memos: TodoMemo[]
}

interface TodoMemo {
  id: number,
  description: string
}

const TodoComponent = () => {
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
  const [todoDetails, setTodoDetails] = useState<TodoMemo>();

  const showDetails = (todo: Todo) => {
    const requiredTodo = todos.filter(t => t.id === todo.id);
    setTodoDetails(requiredTodo.memos);
  }

  return (
    <Container
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.700"
      color="white"
    >
      <Grid
        templateAreas={{
          base: `"form"`,
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
              {/* <CardHeader>
                <Heading>LOGO</Heading>
              </CardHeader> */}
              <CardBody display="flex">
                <Stack width="100%" spacing={5}>
                  {todos.map((todo) => {
                    return <Button variant="link" onClick={() => showDetails(todo)}>{todo.title}</Button>;
                  })}
                  {/* <Text fontWeight="bold" fontSize="xl" marginBottom={3}>
                    Verification
                  </Text> */}

                  {/* <HStack justifyContent="space-between" fontSize="sm">
                    <Text>SMS OTP</Text>
                    <Text color="grey">Sent on 77777-77777</Text>
                  </HStack> */}

                  <HStack color="black" paddingX={4} justifyContent="center">
                    {/* <OTPInput
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                    OTPLength={4}
                    otpType="number"
                    // secure
                  /> */}
                  </HStack>

                  {/* <Text fontSize="sm">
                    Entered Wrong Details?{" "}
                    <Link _hover={{ color: "grey" }} color="#b166e5">
                      Re-enter
                    </Link>
                  </Text>
                  <Button
                    bgGradient="linear(to-r, #e17660, #b667d8)"
                    colorScheme="pink"
                    color="white"
                  >
                    Verify
                  </Button> */}
                </Stack>
              </CardBody>

              <CardFooter>
                {/* <Link _hover={{ color: "grey" }} fontSize="sm">
                  Go back to Home
                </Link> */}
              </CardFooter>
            </Card>
          </GridItem>
          <Show above="lg">
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
                {todoDetails.memos.map((m: any) => {
                return m.map(t => {
                    return <Text>{m.description}</Text>
                })}
                {/* <Image
                  // src={Image2}
                  borderRadius={10}
                  pos={"absolute"}
                  top="130"
                  left="110"
                /> */}
              </Card>
            </GridItem>
          </Show>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoComponent;
