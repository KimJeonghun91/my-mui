import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
export function getCardMediaUtilityClass(slot) {
  return generateUtilityClass('MuiCardMedia', slot);
}
var cardMediaClasses = generateUtilityClasses('MuiCardMedia', ['root', 'media', 'img']);
export default cardMediaClasses;