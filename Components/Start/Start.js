import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home/Home";

const Stack = createNativeStackNavigator();

const GetStartedBtn = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        display: "flex",
        width: 327,
        paddingVertical: 14,
        paddingHorizontal: 115,
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 16,
        backgroundColor: "#6552FE",
        marginTop: 40,
        marginLeft: 20,
      }}
      onPress={() => {
        navigation.navigate("Wallet");
      }}
    >
      <Text style={{ color: "#fff", fontFamily: "SFProText-Semibold" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default function Start() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wallet" component={Home} />
      </Stack.Navigator>

      <View>
        <View>
          <Image
            source={require("../../assets/logo/logo2.png")}
            alt="Logo"
            style={{
              width: 400,
              height: 400,
              resizeMode: "contain",
              marginTop: -110,
            }}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/img/start/startimage.png")}
            alt=""
            style={{
              width: 400,
              height: 400,
              flexShrink: 0,
              resizeMode: "contain",
              marginTop: -100,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <Text
          style={{
            color: "#fff",
            fontFamily: "SFProText-Semibold",
            fontSize: 32,
            fontStyle: "normal",
            fontWeight: 500,
            marginLeft: 20,
            marginTop: -30,
            width: 300,
          }}
        >
          Jump start your crypto portfolio
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "SFProText-Light",
            marginLeft: 20,
            marginTop: 20,
            fontSize: 14,
            fontStyle: "normal",
          }}
        >
          Take your investment portfolio to the next level
        </Text>
        <View>
          <GetStartedBtn title="Get Started" />
        </View>
      </View>
    </NavigationContainer>
  );
}
