import { PropTypes } from 'react';

import { COMPONENT_COLORS, COMPONENT_ALTERNATIVE_COLORS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Label = createWrapperComponent({
  displayName: 'Label',
  styles,
  propTypes: {
    color: PropTypes.oneOf(COMPONENT_COLORS),
  },
  mapPropsToClassNames:
    ({ color }) => ['label', { [color]: COMPONENT_ALTERNATIVE_COLORS.includes(color) }],
});

export default Label;
