import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";
import useThemedStyles from "../../../hook/useThemedStyles";

function TabButton({ name, activeTab, onHandleSearchType }) {
  const style = useThemedStyles(styles);
  return (
    <TouchableOpacity
      style={style.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={style.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;