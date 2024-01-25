import React from "react";
import { Amplify } from "aws-amplify";
import {
  ThemeProvider,
  Authenticator,
  Button,
  Flex,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import theme from "./theme";
import logo from "./logo.svg";

Amplify.configure(aws_exports);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >
            <View width="100%">
              <Image src={logo} alt="logo" width={240} height={240} />
            </View>

            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%">
              <Text>
                Edit <code>src/App.tsx</code> and save to reload.
              </Text>
            </View>
          </Flex>
        )}
      </Authenticator>
    </ThemeProvider>
  );
};

export default App;
