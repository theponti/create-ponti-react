import styled from '@emotion/styled';
import PropTypes, { InferProps } from 'prop-types';

type EmojiSizes = 'sm' | 'md' | 'lg';

interface EmojiWrapProps {
  size: EmojiSizes;
}

const SIZES = {
  sm: '16px',
  md: '24px',
  lg: '48px',
};

const EmojiWrap = styled.span`
  font-size: ${(props: EmojiWrapProps) => SIZES[props.size]};
`;

function Emoji({
  children, kind, size,
}: InferProps<typeof Emoji.propTypes>) {
  return (
    <EmojiWrap aria-label={kind} size={size as EmojiSizes} role="img">
      {children}
    </EmojiWrap>
  );
}

Emoji.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
};

export default Emoji;
