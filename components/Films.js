import React from 'react';
import { Button, View } from 'react-native';

export default Films = ({items, handleClick}) => (
  items.map(item => <View key={item.title || item.name} style={{padding: 5}}><Button onPress={() => handleClick(item.title || item.name)} title={item.title || item.name}/></View>) 
)