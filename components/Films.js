import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

export default Films = ({ items, handleClick }) =>
  items.map((item) => (
    <View key={item.title} style={{ padding: 5 }}>
      <Button color="teal" onPress={() => handleClick(item.title)} title={item.title} />
      {/* <TouchableOpacity
        style={{
          backgroundColor: 'teal',
          borderRadius: 15,
          alignItems: 'center',
          width: 200,
        }}
        onPress={() => handleClick(item.title)}
      >
        <Text style={{ color: 'white' }}>{item.title}</Text>
      </TouchableOpacity> */}
    </View>
  ));
