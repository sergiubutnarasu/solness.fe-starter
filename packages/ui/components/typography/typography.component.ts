import Heading from '../heading';
import Text from '../text';

type CompoundProps = {
  Text: typeof Text;
  Title: typeof Heading;
};

const Typography: CompoundProps = () => {
  return null;
};

Typography.Title = Heading;
Typography.Text = Text;

export default Typography;
