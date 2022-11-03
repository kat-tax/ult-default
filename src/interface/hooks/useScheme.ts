import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {getScheme} from 'store/slices/settings/selectors';

export function useScheme() {
  const deviceScheme = useColorScheme();
  const savedScheme = useSelector(getScheme);
  return savedScheme || deviceScheme || 'light';
}