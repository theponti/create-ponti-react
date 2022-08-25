import styled from '@emotion/styled';
import PropTypes, { InferProps } from 'prop-types';

const Wrap = styled.div`
  background-color: ${(props) => props.theme.palette.error.main};
  border-radius: 10px;
  border: 1px solid grey;
  padding: 16px;
  font-size: 1.3rem;
  font-weight: 500;
`;

export default function FeedbackBlock({ children }: InferProps<typeof FeedbackBlock.propTypes>) {
  return <Wrap>{children}</Wrap>;
}

FeedbackBlock.propTypes = {
  children: PropTypes.node.isRequired,
};
