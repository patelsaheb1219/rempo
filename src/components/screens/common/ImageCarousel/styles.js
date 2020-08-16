import { Platform, Dimensions, StyleSheet } from 'react-native';


const { width: screenWidth } = Dimensions.get('window');

export const styleRules = {
  item: {
    width: screenWidth - 60,
    height: 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 5
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
}