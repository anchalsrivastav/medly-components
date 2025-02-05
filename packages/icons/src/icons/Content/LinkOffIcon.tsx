import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LinkOffIconSvg from '../../assets/Content/link_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LinkOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LinkOffIcon.Style = SvgIcon;
LinkOffIcon.displayName = 'LinkOffIcon';

export default LinkOffIcon
