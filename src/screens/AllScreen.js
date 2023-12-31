import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TextInput,
  Animated,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/MaterialIcons";
// import Profiles from "../components/Profiles";
// import Messages from "../components/Messages";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import ChatIcon from "../../assets/Chat67.png";
import ImageIcon from "../../assets/image68.png";
import VideoIcon from "../../assets/video69.png";
import PinkBackground from "../../assets/Ellipse70.png";

const AllScreen = (props, navigation) => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState(null);

  // const handleTalk = () => {
  //     navigation.navigate('Call')
  // }
  const rightSwipe = () => {
    return (
      <View style={styles.rightSwipeContainer}>
        {/* <Image source={PinkBackground} style={styles.swipeBackground} /> */}

        <View style={styles.swipeIconsContainer}>
          <View style={styles.swipeIconContainer}>
            <ImageBackground
              source={PinkBackground}
              style={styles.iconBackground}
            >
              <Image source={ChatIcon} style={styles.swipeIcon} />
            </ImageBackground>
            {/* Add text below the Chat icon */}
            <Text style={styles.swipeText}>Chat</Text>
            <Text style={styles.swipeSubText}>8₹/min</Text>
          </View>

          <View style={styles.swipeIconContainer}>
            <ImageBackground
              source={PinkBackground}
              style={styles.iconBackground}
            >
              <Image source={ImageIcon} style={styles.swipeIcon} />
            </ImageBackground>
            {/* Add text below the Voice Call icon */}
            <Text style={styles.swipeText}>Voice Call</Text>
            <Text style={styles.swipeSubText}>8₹/min</Text>
          </View>

          <View style={styles.swipeIconContainer}>
            <ImageBackground
              source={PinkBackground}
              style={styles.iconBackground}
            >
              <Image source={VideoIcon} style={styles.swipeIcon} />
            </ImageBackground>
            {/* Add text below the Video Call icon */}
            <Text style={styles.swipeText}>Video Call</Text>
            <Text style={styles.swipeSubText}>8₹/min</Text>
          </View>
        </View>
      </View>
    );
  };

  // ... (rest of the code)
  const customNames = ["Alex", "Adil", "Marina", "Dean", "Max"];

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://api.github.com/users");
        const data = await resp.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search query:", searchQuery);
    setShowSearchPopup(false);
  };

  const MessagesComponent = ({ username, uri, count, onPress }) => {
    return (
      <Swipeable renderRightActions={rightSwipe}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.messageContainer}>
            {uri ? (
              <Image source={{ uri: uri }} style={styles.avatar} />
            ) : (
              <View style={styles.textAvatarContainer}>
                <Text style={styles.textAvatar}>EN</Text>
              </View>
            )}

            <View style={styles.textContainer}>
              <View style={styles.columnContainer}>
                <Text style={[styles.username, { color: "#FFF" }]}>
                  {username}
                </Text>
                <Text style={{ color: "white", fontSize: 10 }}>
                  How are you ?
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  handleTalk;
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 9,
                    marginBottom: 5,
                  }}
                >
                  English Loneliness
                </Text>

                <ImageBackground
                  style={[
                    styles.additionalUnreadImage,
                    styles.vectorBackground,
                  ]}
                  source={require("../../assets/talk-bg.png")}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>Talk Now</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <LinearGradient colors={["#301c44", "#301c44"]} style={styles.gradient}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../../assets/Tab-bg.png")}
          style={styles.iconBackground}
        >
          <TouchableOpacity
            onPress={() => {
              setShowSearchPopup(true);
              setIsSearchIconPressed(true);
            }}
          >
            <Image
              source={require("../../assets/Searches.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View></View>

        <Text style={styles.header}>All</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Payment");
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Image source={require("../../assets/wallet.png")} />
          <Text style={{ color: "white", fontSize: 10 }}>10.5₹</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.previouslyContactedText}>Previously Contacted</Text> */}

      {/* <ScrollView horizontal style={styles.proContainer} showsHorizontalScrollIndicator={false}>
                {loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <View style={styles.card} >
                        {data.map((item) => (
                            <Profiles key={item.id} username={item.login} uri={item.avatar_url} />
                        ))}
                    </View>
                )}
            </ScrollView> */}

      {/* bottom chat bullshit */}
      <View style={styles.ops}>
        <View style={styles.col}></View>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color="#f20042" />
          ) : (
            <View style={styles.list}>
              <Image
                source={require("../../assets/all.png")}
                style={styles.centeredImage}
              />

              {data.map((item) => (
                <MessagesComponent
                  key={item.id}
                  username={item.login}
                  uri={item.avatar_url}
                  count={Math.floor(Math.random() * 3)}
                  onPress={() => {
                    props.navigation.navigate("Discussion", {
                      itemId: item.id,
                      itemName: item.login,
                      itemPic: item.avatar_url,
                    });
                  }}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={showSearchPopup}
        onRequestClose={() => setShowSearchPopup(false)}
      >
        <View style={[styles.popupContainer, { padding: 30, marginTop: 0 }]}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              placeholder="Enter search query"
              placeholderTextColor="white"
              backgroundColor="white"
              fontWeight="bold"
              textAlign="center"
              color="black"
            />
          </View>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            OR
          </Text>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "rgba(192, 167, 216, 1)",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Find your Supporter
          </Text>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 20,
            }}
          >
            Who would you like to talk to?
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                marginRight: 20,
              }}
              onPress={() => handleGenderSelection("Male")}
            >
              <Image
                source={require("../../assets/Frame.png")}
                style={{ width: 50, height: 50, marginBottom: 5 }}
              />
              <Text style={{ color: "white", marginTop: 5 }}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: "center",
              }}
              onPress={() => handleGenderSelection("Female")}
            >
              <Image
                source={require("../../assets/Frame2.png")}
                style={{ width: 50, height: 50, marginBottom: 5 }}
              />
              <Text style={{ color: "white", marginTop: 5 }}>Female</Text>
            </TouchableOpacity>
          </View>

          {selectedGender && (
            <>
              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginTop: 20,
                }}
              >
                What should be supporter age?
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    marginRight: 20,
                  }}
                  onPress={() => handleSupporterAgeSelection("Button 1")}
                >
                  <Image
                    source={require("../../assets/Ellipse.png")}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 5,
                      borderRadius: 40,
                    }}
                  />
                  <Image
                    source={require("../../assets/munda.png")}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      top: 15,
                    }}
                  />
                  <Text style={{ color: "white", marginTop: 5 }}>
                    21-30 yrs
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    marginRight: 20,
                  }}
                  onPress={() => handleSupporterAgeSelection("Button 2")}
                >
                  <Image
                    source={require("../../assets/Ellipse.png")}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 5,
                      borderRadius: 40,
                    }}
                  />
                  <Image
                    source={require("../../assets/munda.png")}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      top: 15,
                    }}
                  />
                  <Text style={{ color: "white", marginTop: 5 }}>
                    31-40 yrs
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: "center",
                  }}
                  onPress={() => handleSupporterAgeSelection("Button 3")}
                >
                  <Image
                    source={require("../../assets/Ellipse.png")}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 5,
                      borderRadius: 40,
                    }}
                  />
                  <Image
                    source={require("../../assets/munda.png")}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      top: 15,
                    }}
                  />
                  <Text style={{ color: "white", marginTop: 5 }}> 40 yrs</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  marginTop: 39,
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: "rgba(192, 167, 216, 1)",
                  fontWeight: "bold",
                  width: "70%",
                  alignSelf: "center",
                }}
              >
                <Text style={{ color: "white" }}>Search my Supporter</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  card: {
    marginLeft: 0, // Adjust the marginLeft to bring profiles to the left
    flexDirection: "row",
  },
  list: {
    marginTop: 0,
    width: "100%", // Adjust the width to ensure it takes the full width
  },
  gradient: {
    height: "330%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "15%",
    marginTop: -100,
  },

  header: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFF",
    flex: 1,
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  header2: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFF",
    flex: 1,
    fontSize: 24,
    justifyContent: "left",
    alignSelf: "left",
    textAlign: "left",
  },
  proContainer: {
    marginRight: -20,
    alignSelf: "center",
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 500,
    backgroundColor: "rgba(42, 9, 85, 1)",
    marginHorizontal: -20,
  },
  col: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: "center",
  },
  day: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#000119",
    flex: 1,
    fontSize: 20,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  unreadCountContainer: {
    // backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: "40%",
  },
  unreadCount: {
    color: "rgba(164, 122, 191, 1)",
    fontWeight: "bold",
  },
  leftActions: {
    flexDirection: "row",
  },
  swipeButton: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  swipeImage: {
    width: 25,
    height: 25,
  },
  popupContainer: {
    flex: 0.75,
    justifyContent: "center",
    backgroundColor: "rgba(42, 9, 85, 0.97)",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    marginBottom: "auto",
  },
  popupText: {
    color: "white",
    fontSize: 28,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
  },
  icon: {
    marginBottom: 7,
  },
  input: {
    flex: 1,
  },

  clearButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },

  previouslyContactedText: {
    color: "#fff",
    fontSize: 12,
  },
  centeredImage: {
    alignSelf: "center",
    marginTop: 20, // Adjust the margin-top as needed
    width: 45, // Adjust the width as needed
    height: 6, // Adjust the height as needed
  },
  swipeIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  swipeIconContainer: {
    alignItems: "center",
    marginHorizontal: 5, // Adjust the margin as needed
  },

  iconBackground: {
    width: 37, // Adjust the width as needed
    height: 37, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15, // Adjust the borderRadius as needed
    overflow: "hidden",
  },

  swipeIcon: {
    width: 25,
    height: 25,
  },
  swipeText: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },

  swipeSubText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 2,
    textAlign: "center",
  },
  additionalUnreadImage: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  vectorBackground: {
    // backgroundColor: "white",
    paddingHorizontal: 1.5,
    marginLeft: 10, // Adjust the margin as needed
  },
});
