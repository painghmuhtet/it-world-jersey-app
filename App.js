import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";

const categories = ["All", "Football", "Retro", "Club", "Custom"];

const products = [
  {
    id: "0001",
    name: "Classic Football Jersey",
    price: "RM 89.00",
    tag: "NEW",
  },
  {
    id: "0002",
    name: "Premium Club Jersey",
    price: "RM 99.00",
    tag: "BEST",
  },
  {
    id: "0003",
    name: "Retro Collection",
    price: "RM 79.00",
    tag: "RETRO",
  },
  {
    id: "0004",
    name: "Custom Jersey",
    price: "From RM 89.00",
    tag: "CUSTOM",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [category, setCategory] = useState("All");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      <View style={styles.app}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.brand}>IT WORLD JERSEY</Text>
              <Text style={styles.subtitle}>
                Football Jersey Store
              </Text>
            </View>

            <Pressable style={styles.searchButton}>
              <Text style={styles.searchIcon}>⌕</Text>
            </Pressable>
          </View>

          {/* HERO */}
          <View style={styles.hero}>
            <Text style={styles.heroSmall}>
              2026 COLLECTION
            </Text>

            <Text style={styles.heroTitle}>
              YOUR JERSEY.{"\n"}YOUR STYLE.
            </Text>

            <Text style={styles.heroDescription}>
              Official-style jerseys, retro looks and custom
              designs.
            </Text>

            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                SHOP NOW  →
              </Text>
            </Pressable>
          </View>

          {/* CATEGORIES */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Categories
            </Text>

            <Text style={styles.sectionLink}>
              View all
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item) => (
              <Pressable
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.category,
                  category === item && styles.categoryActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === item &&
                      styles.categoryTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* PRODUCTS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Latest Jerseys
            </Text>

            <Text style={styles.productCount}>
              4 products
            </Text>
          </View>

          <View style={styles.grid}>
            {products.map((product) => (
              <Pressable
                key={product.id}
                style={styles.card}
              >
                <View style={styles.jerseyPreview}>
                  <Text style={styles.jerseyNumber}>
                    {product.id.slice(-2)}
                  </Text>

                  <Text style={styles.jerseyBrand}>
                    ITWJ
                  </Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.tagRow}>
                    <Text style={styles.tag}>
                      {product.tag}
                    </Text>

                    <Text style={styles.productNumber}>
                      #{product.id}
                    </Text>
                  </View>

                  <Text style={styles.productName}>
                    {product.name}
                  </Text>

                  <Text style={styles.price}>
                    {product.price}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>

          {/* CUSTOM DESIGN */}
          <View style={styles.customBox}>
            <Text style={styles.customSmall}>
              CUSTOM DESIGN
            </Text>

            <Text style={styles.customTitle}>
              Make your own jersey.
            </Text>

            <Text style={styles.customDescription}>
              Send your design idea and order directly
              through WhatsApp.
            </Text>

            <Pressable style={styles.outlineButton}>
              <Text style={styles.outlineButtonText}>
                CREATE DESIGN  →
              </Text>
            </Pressable>
          </View>

          {/* FOOTER */}
          <Text style={styles.footer}>
            © 2026 IT WORLD JERSEY
          </Text>
        </ScrollView>

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          {[
            ["Home", "⌂"],
            ["Shop", "□"],
            ["Videos", "▶"],
            ["Create", "+"],
            ["Profile", "○"],
          ].map(([label, icon]) => (
            <Pressable
              key={label}
              onPress={() => setActiveTab(label)}
              style={styles.navItem}
            >
              <Text
                style={[
                  styles.navIcon,
                  activeTab === label &&
                    styles.navActive,
                ]}
              >
                {icon}
              </Text>

              <Text
                style={[
                  styles.navLabel,
                  activeTab === label &&
                    styles.navActive,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#090b0f",
  },

  app: {
    flex: 1,
    backgroundColor: "#090b0f",
  },

  content: {
    padding: 18,
    paddingBottom: 115,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  brand: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "900",
    letterSpacing: 0.6,
  },

  subtitle: {
    color: "#8d939d",
    fontSize: 12,
    marginTop: 3,
  },

  searchButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#151922",
    borderWidth: 1,
    borderColor: "#252a34",
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    color: "#ffffff",
    fontSize: 27,
  },

  hero: {
    borderRadius: 24,
    padding: 24,
    minHeight: 245,
    backgroundColor: "#171b24",
    borderWidth: 1,
    borderColor: "#292f3b",
    justifyContent: "center",
  },

  heroSmall: {
    color: "#e6e9ef",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 36,
    marginTop: 9,
  },

  heroDescription: {
    color: "#aeb4bf",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 10,
    maxWidth: 290,
  },

  primaryButton: {
    alignSelf: "flex-start",
    marginTop: 18,
    backgroundColor: "#ffffff",
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 12,
  },

  primaryButtonText: {
    color: "#090b0f",
    fontSize: 12,
    fontWeight: "900",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },

  sectionLink: {
    color: "#9da4af",
    fontSize: 12,
  },

  productCount: {
    color: "#6f7682",
    fontSize: 11,
  },

  category: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#151922",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#252a34",
  },

  categoryActive: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },

  categoryText: {
    color: "#9ea5b0",
    fontSize: 12,
    fontWeight: "700",
  },

  categoryTextActive: {
    color: "#090b0f",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48.2%",
    backgroundColor: "#11141b",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#222731",
    marginBottom: 12,
  },

  jerseyPreview: {
    height: 150,
    backgroundColor: "#202631",
    alignItems: "center",
    justifyContent: "center",
  },

  jerseyNumber: {
    color: "#ffffff",
    fontSize: 43,
    fontWeight: "900",
  },

  jerseyBrand: {
    color: "#9da4af",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 3,
  },

  cardContent: {
    padding: 12,
  },

  tagRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tag: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.2,
  },

  productNumber: {
    color: "#616873",
    fontSize: 9,
  },

  productName: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 8,
    minHeight: 32,
  },

  price: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 7,
  },

  customBox: {
    marginTop: 14,
    padding: 20,
    borderRadius: 22,
    backgroundColor: "#151922",
    borderWidth: 1,
    borderColor: "#292f3b",
  },

  customSmall: {
    color: "#8f96a1",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.8,
  },

  customTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 7,
  },

  customDescription: {
    color: "#a1a8b3",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  outlineButton: {
    alignSelf: "flex-start",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#454b56",
    borderRadius: 11,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  outlineButtonText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "900",
  },

  footer: {
    color: "#5f6671",
    textAlign: "center",
    fontSize: 10,
    marginTop: 26,
  },

  bottomNav: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    height: 68,
    borderRadius: 23,
    backgroundColor: "#151922",
    borderWidth: 1,
    borderColor: "#292f3b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 52,
  },

  navIcon: {
    color: "#777e89",
    fontSize: 19,
    height: 22,
  },

  navLabel: {
    color: "#777e89",
    fontSize: 9,
    marginTop: 1,
    fontWeight: "700",
  },

  navActive: {
    color: "#ffffff",
  },
});
