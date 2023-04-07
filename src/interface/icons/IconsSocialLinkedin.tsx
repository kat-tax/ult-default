import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export function IconsSocialLinkedin() {
  return (
    <View style={styles.root}>
      <Svg width="20" height="20">
        <Path d="M 18.571428571428573 0 L 1.4241071258272444 0 C 0.6383928230830602 0 0 0.6473215988704136 0 1.4419644219534737 L 0 18.558036259242467 C 0 19.352679082325526 0.6383928230830602 20 1.4241071258272444 20 L 18.571428571428573 20 C 19.35714287417276 20 20 19.352679082325526 20 18.558036259242467 L 20 1.4419644219534737 C 20 0.6473215988704136 19.35714287417276 0 18.571428571428573 0 Z M 6.044642584664481 17.142857142857142 L 3.080357142857143 17.142857142857142 L 3.080357142857143 7.598214149475098 L 6.049107142857143 7.598214149475098 L 6.049107142857143 17.142857142857142 L 6.044642584664481 17.142857142857142 Z M 4.562499863760812 6.294642857142858 C 3.611607040677752 6.294642857142858 2.843750034059797 5.5223214626312265 2.843750034059797 4.575892857142858 C 2.843750034059797 3.6294642516544893 3.611607040677752 2.857142857142857 4.562499863760812 2.857142857142857 C 5.508928469249181 2.857142857142857 6.281249863760812 3.6294642516544893 6.281249863760812 4.575892857142858 C 6.281249863760812 5.526785680225918 5.513392686843872 6.294642857142858 4.562499863760812 6.294642857142858 L 4.562499863760812 6.294642857142858 Z M 17.15624945504325 17.142857142857142 L 14.19196401323591 17.142857142857142 L 14.19196401323591 12.5 C 14.19196401323591 11.392857176916939 14.16964258466448 9.968750136239189 12.651785441807338 9.968750136239189 C 11.107142652784074 9.968750136239189 10.870535714285715 11.174107704843793 10.870535714285715 12.41964340209961 L 10.870535714285715 17.142857142857142 L 7.906250272478376 17.142857142857142 L 7.906250272478376 7.598214149475098 L 10.750000136239189 7.598214149475098 L 10.750000136239189 8.901785441807338 L 10.790178435189384 8.901785441807338 C 11.187499846730914 8.151785475867134 12.156250306538173 7.3616068703787665 13.598214558192662 7.3616068703787665 C 16.598214421953475 7.3616068703787665 17.15624945504325 9.339285237448555 17.15624945504325 11.910713740757533 L 17.15624945504325 17.142857142857142 L 17.15624945504325 17.142857142857142 Z" fill="#0a66c2"/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 24,
    height: 24,
  },
});

