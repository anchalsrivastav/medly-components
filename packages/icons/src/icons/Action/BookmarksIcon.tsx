import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BookmarksIconSvg from '../../assets/Action/bookmarks_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BookmarksIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BookmarksIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BookmarksIcon.Style = SvgIcon;
BookmarksIcon.displayName = 'BookmarksIcon';

export default BookmarksIcon
