import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './style';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
