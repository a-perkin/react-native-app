import React, { useState } from "react";
import { View, FlatList } from "react-native";
import StatementItem from "./StatementItem";
import StatementHeader from "./StatementHeader";
import { STATEMENT } from "../constants/statement";
import { styles } from "../constants/styles";

const Separator = () => {
  return <View style={styles.statementSeparator}></View>;
};

const Statement = ({ card, navigation }) => {
  const cardKey = card.key;
  const data = STATEMENT;
  let filteredStatement = data.filter((item) => item.cardKey === cardKey);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchState, setSearchState] = useState(false);

  const handleSearch = (term: string) => {
    console.log(term);
    setSearchTerm(term);
  };

  if (searchTerm) {
    filteredStatement = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleSearchOpen = (state: boolean) => {
    setSearchState(state);
    console.log(state);
  };

  return (
    <View style={styles.statementBackground}>
      <View
        //as stupid as possible, but works for demo
        style={
          searchState
            ? styles.statementContainerOpen
            : styles.statementContainer
        }
      >
        <StatementHeader
          onSearch={handleSearch}
          onSearchOpen={handleSearchOpen}
        />
        <FlatList
          data={filteredStatement}
          renderItem={({ item }) => (
              <StatementItem item={item} card={card} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.key.toString()}
          ItemSeparatorComponent={Separator}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </View>
  );
};

export default Statement;
