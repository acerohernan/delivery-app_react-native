import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../styles";
import { ScreenWidth } from "react-native-elements/dist/helpers";

/* Variables */

const screenHeight = Dimensions.get("screen").height;

/* Components */

//NavLink

interface NavLinkProps {
  active?: boolean;
  title: string;
}

const NavLink = ({ active, title }: NavLinkProps) => {
  const styles = StyleSheet.create({
    container: {},
    link: {
      fontSize: 15,
      fontWeight: active ? "bold" : "500",
      color: active ? colors.black : "gray",
      marginRight: 25,
    },
  });

  return (
    <TouchableOpacity>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

//RestaurantNav
const RestaurantNav = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.orangeLight,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      paddingVertical: 20,
      paddingLeft: 25,
      marginLeft: 20,
      marginTop: 15,
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <NavLink title="For You" active />
        <NavLink title="Burguer" />
        <NavLink title="Meels" />
        <NavLink title="Chicken" />
        <NavLink title="For You" />
        <NavLink title="Burguer" />
        <NavLink title="Meels" />
        <NavLink title="Chicken" />
      </ScrollView>
    </View>
  );
};

//MenuItem
const MenuItem = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderRadius: 15,
      borderColor: "rgba(198, 198, 207, 0.2)",
      borderWidth: 1,
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: "cover",
      borderRadius: 10,
      marginRight: 15,
    },
    details: {
      width: ScreenWidth - 175,
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      marginBottom: 5,
    },
    text: {
      fontSize: 13,
      color: "gray",
    },
    price: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    priceText: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.orange,
    },
    addButton: {
      height: 22,
      width: 22,
      backgroundColor: colors.orange,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../images/restaurant.jpg")}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title}>Chicken Burguer</Text>
        <Text style={styles.text}>Sandwich features two savory</Text>
        <Text style={styles.text}>Flame-grilled beef patties</Text>
        <View style={styles.price}>
          <Text style={styles.priceText}>$15.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Material name="plus" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//Menu
const Menu = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </View>
  );
};

//Main
export default function RestaurantScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../images/restaurant.jpg")}
        style={styles.image}
      />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>Mcdonald'S</Text>
          <Text style={styles.subtitle}>
            $$ • Burger • American Food • Deshi Food
          </Text>
          <View style={styles.rating}>
            <Material name="star" color="#fdda3a" size={25} />
            <Text style={styles.ratingTitle}>4.9</Text>
            <Text>200+ Ratings</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Material name="cash-multiple" color="green" size={25} />
              <Text style={styles.detailTitle}>Free Delivery</Text>
            </View>
            <View style={styles.detailItem}>
              <Material name="clock-fast" color="#2E89BA" size={25} />
              <Text style={styles.detailTitle}>30 min</Text>
            </View>
            <Text style={styles.takeAway}>Take Away</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RestaurantNav />
          <Menu />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  body: {
    height: screenHeight - 300,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: -25,
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  subtitle: {
    color: "gray",
    marginTop: 10,
  },
  rating: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingTitle: {
    fontWeight: "bold",
    marginLeft: 3,
    marginRight: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailTitle: {
    fontWeight: "200",
    marginLeft: 5,
  },

  takeAway: {
    padding: 10,
    color: colors.orange,
    backgroundColor: colors.orangeLight,
    borderRadius: 10,
    fontWeight: "bold",
  },
});