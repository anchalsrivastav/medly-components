import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Title.styled';
import { Props } from './types';

export const Title: React.SFC<Props> & WithStyle = React.memo(({ children, isActive, onToggle, color, bgColor }) => {
    return (
        <Styled.Wrapper isActive={isActive} onClick={onToggle} color={color} bgColor={bgColor}>
            {children}
            <ExpandMoreIcon size="M" />
        </Styled.Wrapper>
    );
});
Title.displayName = 'Title';
Title.Style = Styled.Wrapper;
