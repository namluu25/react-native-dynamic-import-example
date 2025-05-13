import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const components = require.context("../components/", true, /\.tsx$/);

export default function Index() {
  const [componentList, setComponentList] = useState<
    (React.ComponentType<any> | undefined)[]
  >([]);

  const [componentNameList, setComponentNameList] = useState<string[]>([]);

  useEffect(() => {
    const defaultSource = componentNameList.map((component) => {
      try {
        const parsedComponent = components(`./${component}.tsx`) as {
          default: React.ComponentType<any>;
        };
        return parsedComponent.default;
      } catch (error) {
        console.error(`Couldn't load the component: ${component}`, error);
      }
    });
    setComponentList(defaultSource);
  }, [componentNameList]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <Pressable
        style={styles.button}
        onPress={() => setComponentNameList([...componentNameList, "image"])}
      >
        <Text>Add image component</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => setComponentNameList([...componentNameList, "text"])}
      >
        <Text>Add text component</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => setComponentNameList([...componentNameList, "circle"])}
      >
        <Text>Add circle component</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() =>
          setComponentNameList([...componentNameList, "rectangle"])
        }
      >
        <Text>Add rectangle component</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.destructiveButton]}
        onPress={() => setComponentNameList([])}
      >
        <Text style={{ color: "white" }}>Clear all components</Text>
      </Pressable>
      <View
        style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 16 }}
      >
        {componentList.map(
          (Component, index) => Component && <Component key={index} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: "black",
  },
  destructiveButton: {
    backgroundColor: "#ff6666",
  },
});
