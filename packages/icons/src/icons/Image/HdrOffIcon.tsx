import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HdrOffIconSvg from '../../assets/Image/hdr_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdrOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HdrOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HdrOffIcon.Style = SvgIcon;
HdrOffIcon.displayName = 'HdrOffIcon';

export default HdrOffIcon
